import { ajax } from './xhr';

import { METHOD_NOT_ALLOWED } from 'constants/ajax';

describe('Util::Ajax:ajax', () => {
  let
    XMLHttpRequestSpy,
    baseParams;

  beforeAll(() => {
    XMLHttpRequestSpy = {
      addEventListener: jest.spyOn(XMLHttpRequest.prototype, 'addEventListener'),
      setRequestHeader: jest.spyOn(XMLHttpRequest.prototype, 'setRequestHeader'),
      open:             jest.spyOn(XMLHttpRequest.prototype, 'open'),
      send:             jest.spyOn(XMLHttpRequest.prototype, 'send'),
    };

    baseParams = {
      url: 'localhost',
      method: 'GET',
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('Test XMLHttpRequest Configuration', () => {
    it('should throw Error if called with invalid method', () => {
      expect(() =>
        ajax({
          ...baseParams,
          method: 'XYZ',
        })
      ).toThrowError(METHOD_NOT_ALLOWED);
    });

    it('should add data payload to query for GET request', () => {
      ajax({
        ...baseParams,
        data: {
          a: 1,
        },
      });
  
      const expectedUrl = `${baseParams.url}?a=1`;
  
      expect(XMLHttpRequestSpy.open).toHaveBeenCalledWith(baseParams.method, expectedUrl, true);
      expect(XMLHttpRequestSpy.send).toHaveBeenCalledWith(null);
    });
  
    it('should send data payload in body for POST request', () => {
      const data = {
        b: 'a',
      };
  
      ajax({
        ...baseParams,
        method: 'POST',
        data,
      });
  
      expect(XMLHttpRequestSpy.open).toHaveBeenCalledWith('POST', baseParams.url, true);
      expect(XMLHttpRequestSpy.send).toHaveBeenCalledWith(data);
    });
  
    it('should additional headers if passed as param', () => {
      const headers = {
        'accepts': 'application/json',
        'sec-mode': 'cors',
      };
  
      ajax({
        ...baseParams,
        headers,
      });
  
      expect(XMLHttpRequestSpy.setRequestHeader).toHaveBeenNthCalledWith(1, 'accepts', headers.accepts);
      expect(XMLHttpRequestSpy.setRequestHeader).toHaveBeenNthCalledWith(2, 'sec-mode', headers['sec-mode']);
    });
  });

  describe('Test External Promise API', () => {
    let
      xhrLoadStub,
      xhrAbortStub,
      xhrErrorStub;

    beforeAll(() => {
      const eventHandlers = {};

      XMLHttpRequestSpy.addEventListener.mockImplementation((event, eventHandler) => {
        eventHandlers[event] = eventHandler;

        xhrLoadStub  = eventHandlers['load'];
        xhrAbortStub = eventHandlers['abort'];
        xhrErrorStub = eventHandlers['error'];
      })
    });

    it('should return a Promise to XHR object', () => {
      expect(
        ajax(baseParams)
      ).toBeInstanceOf(Promise);
    });

    it('should resolve with response payload when XHR loads', () => {
      const successHandler = jest.fn();

      const promise = ajax(baseParams)
        .then(successHandler);
      
      xhrLoadStub();

      promise.then(() => 
        expect(successHandler).toHaveBeenCalled()
      );
    });

    it('should reject with error message when XHR aborts', () => {
      const
        error = { message: 'Some Error Happened' },
        errorHandler = jest.fn();

      const promise = ajax(baseParams)
        .then(undefined, errorHandler);
      
      xhrAbortStub();

      promise.then(() => 
        expect(errorHandler).toHaveBeenCalledWith(error)
      );
    });

    it('should reject with error message when XHR fails', () => {
      const
        error = { message: 'Some Error Happened' },
        errorHandler = jest.fn();

      const promise = ajax(baseParams)
        .then(undefined, errorHandler);
      
      xhrErrorStub();

      promise.then(() => 
        expect(errorHandler).toHaveBeenCalledWith(error)
      );
    });
  });
});

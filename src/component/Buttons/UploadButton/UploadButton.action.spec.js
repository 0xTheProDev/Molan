import * as UploadButtonActions from './UploadButton.action';

describe('Component::Buttons:UploadButton::UploadButtonActions', () => {
  describe('Test onFileButtonClick', () => {
    let
      onClickStub;

    beforeAll(() => {
      onClickStub = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should trigger click event on File Input element', () => {
      const InputElementRef = {
        current: {
          click: onClickStub,
        },
      };

      const onClickHandler = UploadButtonActions.onFileButtonClick(InputElementRef);
      onClickHandler();

      expect(onClickStub).toHaveBeenCalled();
    });

    it('should do nothing if current element not found', () => {
      const onClickHandler = UploadButtonActions.onFileButtonClick({});
      onClickHandler();

      expect(onClickStub).not.toHaveBeenCalled();
    });
  });

  describe('Test onFileInputChange', () => {
    const eventHandlers = {};
    let
      onUploadFileStub,
      onUploadFileErrorStub,
      FileReaderStub,
      onChangeHandler;

    beforeAll(() => {
      onUploadFileStub      = jest.fn();
      onUploadFileErrorStub = jest.fn();

      FileReaderStub = {
        addEventListener: jest.spyOn(FileReader.prototype, 'addEventListener'),
        readAsText:       jest.spyOn(FileReader.prototype, 'readAsText'),
      };
    });

    beforeEach(() => {
      FileReaderStub.addEventListener.mockImplementation((eventName, eventHandler) => {
        eventHandlers[eventName] = eventHandler;
      });

      onChangeHandler = UploadButtonActions.onFileInputChange(onUploadFileStub, onUploadFileErrorStub);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should raise error if no file is uploaded', () => {
      onChangeHandler({
        target: {},
      });

      expect(onUploadFileErrorStub).toHaveBeenCalled();
    });

    it('should raise error if more than 1 file is uploaded', () => {
      onChangeHandler({
        target: {
          files: [ 1, 'S' ],
        },
      });

      expect(onUploadFileErrorStub).toHaveBeenCalled();
    });

    it('should read text from uploaded file', () => {
      const File = new Blob([ 'Some Text Content' ], { type: 'text/plain' });

      onChangeHandler({
        target: {
          files: [ File ],
        },
      });

      expect(FileReaderStub.readAsText).toHaveBeenCalledWith(File, 'utf-8');
    });

    it('should invoke callback with file content after loaded', () => {
      const FileContent = 'Some Text Content';
      const File = new Blob([ FileContent ], { type: 'text/plain' });

      onChangeHandler({
        target: {
          files: [ File ],
        },
      });

      const loadEventHandler = eventHandlers.load;
      loadEventHandler({
        target: {
          result: FileContent,
        }
      });

      expect(onUploadFileStub).toHaveBeenCalledWith(FileContent);
    });

    it('should invoke callback with error message if failed', () => {
      const ErrorMessage = 'Some Error Message';

      onChangeHandler({
        target: {
          files: [ {} ],
        },
      });

      const errorEventHandler = eventHandlers.error;
      errorEventHandler({
        target: {
          error: ErrorMessage,
        }
      });

      expect(onUploadFileErrorStub).toHaveBeenCalledWith(ErrorMessage);
    });
  });
});

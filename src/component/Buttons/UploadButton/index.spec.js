import React from 'react';
import { Button } from 'semantic-ui-react';

import UploadButton from './index';

describe('Component::Buttons:UploadButton::Integration Suite', () => {
  let
    onUploadFileStub,
    onUploadFileErrorStub,
    minProps;

  beforeAll(() => {
    onUploadFileStub = jest.fn();
    onUploadFileErrorStub = jest.fn();

    minProps = {
      UploadButtonText: 'Upload',
      onUploadFile: onUploadFileStub,
      onUploadFileError: onUploadFileErrorStub,
    }; 
  });

  it('should render with base structure', () => {
    const wrapper = mount(<UploadButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should let user upload file when clicked on Upload button', () => {
    const
      eventListeners  = {},
      FileContent     = 'Text Content',
      ErrorMessage    = 'Some Error Message';
    
    const File = new Blob([ FileContent ], { type: 'text/plain' });

    const
      HTMLInputElementClickStub       = jest.spyOn(HTMLInputElement.prototype, 'click'),
      FileReaderAddEventListenerStub  = jest.spyOn(FileReader.prototype, 'addEventListener'),
      FileReaderReadAsTextStub        = jest.spyOn(FileReader.prototype, 'readAsText');

    FileReaderAddEventListenerStub.mockImplementation((eventName, eventHandler) => {
      eventListeners[eventName] = eventHandler;
    });

    const wrapper = mount(<UploadButton {...minProps} />);

    /** User clicks on Upload button and Explorer window pops-up */
    wrapper.find(Button).simulate('click');
    expect(HTMLInputElementClickStub).toHaveBeenCalled();

    /** User selects a file */
    wrapper.find('input').simulate('change', {
      target: {
        files: [ File  ],
      },
    });
    expect(FileReaderReadAsTextStub).toHaveBeenCalledWith(File, 'utf-8');

    /** Should invoke callback after file content being loaded  */
    const loadEventListener = eventListeners.load;
    loadEventListener({
      target: {
        result: FileContent,
      },
    });
    expect(onUploadFileStub).toHaveBeenCalledWith(FileContent);

    /** Should invoke callback if fails to load file content */
    const errorEventListener = eventListeners.error;
    errorEventListener({
      target: {
        error: ErrorMessage,
      },
    });
    expect(onUploadFileErrorStub).toHaveBeenCalledWith(ErrorMessage);
  });
});

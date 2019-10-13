// @flow
import {
  InputElementRefObject,
  FileInputChangeHandler,
  FileInputErrorHandler,
} from './UploadButton.flow';

export function onFileButtonClick(refObject: InputElementRefObject): void {
  return function onClickHandler(event: MouseEvent) {
    if (refObject.current) {
      refObject.current.click();
    }
  }
}

export function onFileInputChange(onUploadFile: FileInputChangeHandler, onUploadFileError: FileInputErrorHandler) {
  return function onChangeHandler(event: InputEvent): void {
    const files: FileList = event.target.files;

    if (!files || files.length !== 1) {
      onUploadFileError();
      return;
    }

    const fileReader = new FileReader();

    fileReader.addEventListener('load', (ev: ProgressEvent<FileReader>) => {
      onUploadFile(ev.target.result);
    });
    fileReader.addEventListener('error', (ev: ProgressEvent<FileReader>) => {
      onUploadFileError(ev.target.error);
    });

    fileReader.readAsText(files[0], 'utf-8');
  };
}

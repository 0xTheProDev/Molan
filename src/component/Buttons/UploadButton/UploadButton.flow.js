// @flow
export type UploadButtonProps = {
  UploadButtonText: string,
  onUploadFile: FileInputChangeHandler,
  onUploadFileError: FileInputErrorHandler,
};

export type UploadButtonInternalProps = {
  AllowedFileTypes: string,
  InputElementRef: InputElementRefObject,
  UploadButtonText: string,
  onChangeHandler: (event: InputEvent) => void,
  onClickHandler: (event: MouseEvent) => void,
};

export type InputElementRefObject = {
  current?: HTMLInputElement,
};

export type FileInputChangeHandler = (fileContent: string) => void;

export type FileInputErrorHandler = (error?: string) => void;

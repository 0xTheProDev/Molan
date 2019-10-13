// @flow
export type SaveButtonProps = {
  language: string,
  content: string,
  SaveButtonText: string,
};

export type SaveButtonInternalProps = {
  SaveButtonText: string,
  onSaveButtonClick: (event: MouseEvent) => void,
};

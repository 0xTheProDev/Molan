// @flow
export type IOComponentProps = {
  status: number,
  input?: string,
  output?: string,
};

export type IOComponentInternalProps = {
  color: string,
  status: string,
  input?: string,
  output?: string,
  StatusText: string,
  CustomInputText: string,
  CustomOutputText: string,
  InputFieldPlaceholder: string,
  OutputFieldPlaceholder: string,
};

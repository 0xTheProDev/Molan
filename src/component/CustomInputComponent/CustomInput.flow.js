// @flow
export type onCustomInputChangeCallbackParam = (customInputContent: string) => void;

export type CustomInputOption = {
  value: string,
};

export type CustomInputProps = {
  theme: string,
  onCustomInputChange: onCustomInputChangeCallbackParam,
};

export type CustomInputInternalProps = {
  theme: string,
  CustomInputPlaceholder: string,
  onCustomInputChange: (event: React.SyntheticEvent, customInput: CustomInputOption) => void,
};

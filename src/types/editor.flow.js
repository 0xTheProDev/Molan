// @flow
export type SettingsOption = {
  key: string,
  label: string,
  state: boolean,
  toggleStatus: () => void,
};

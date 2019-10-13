// @flow
import React from 'react';
import { LanguageDropdownOption, onLanguageChangeCallbackParam } from './LanguageDropdown.flow';

export function onLanguageChangeCallback(onLanguageChange: onLanguageChangeCallbackParam) {
  return function onChangeHandler(event: React.SyntheticEvent, data: LanguageDropdownOption) {
    onLanguageChange(data.value);
  }
}

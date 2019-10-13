// @flow
import React from 'react';
import { CustomInputOption, onCustomInputChangeCallbackParam } from './CustomInput.flow';

export function onCustomInputChangeCallback(onCustomInputChange: onCustomInputChangeCallbackParam) {
  return function onChangeHandler(event: React.SyntheticEvent, data: CustomInputOption) {
    onCustomInputChange(data.value);
  }
}

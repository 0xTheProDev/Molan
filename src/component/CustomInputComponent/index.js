// @flow
import React from 'react';

import { CustomInputProps } from './CustomInput.flow';
import { onCustomInputChangeCallback } from './CustomInput.action';
import { CustomInput } from './CustomInput';

export default function CustomInputFactory({ theme, onCustomInputChange }: CustomInputProps) {
  const onChangeHandler = onCustomInputChangeCallback(onCustomInputChange);

  return (
    <CustomInput
      theme={theme}
      onCustomInputChange={onChangeHandler}
    />
  );
}

export { CustomInputProps, CustomInputFactory as CustomInput };

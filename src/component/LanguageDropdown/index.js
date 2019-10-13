// @flow
import React from 'react';

import { LanguageDropdownProps } from './LanguageDropdown.flow';
import { onLanguageChangeCallback } from './LanguageDropdown.action';
import { LanguageDropdown } from './LanguageDropdown';

export default function LanguageDropdownFactory({ DefaultLanguage, onLanguageChange }: LanguageDropdownProps) {
  const onChangeHandler = onLanguageChangeCallback(onLanguageChange);

  return (
    <LanguageDropdown
      DefaultLanguage={DefaultLanguage}
      onLanguageChange={onChangeHandler}
    />
  );
}

export { LanguageDropdownProps, LanguageDropdownFactory as LanguageDropdown };

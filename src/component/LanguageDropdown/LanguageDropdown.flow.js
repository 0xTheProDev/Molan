// @flow
import React from 'react';

export type onLanguageChangeCallbackParam = (language: string) => void;

export type LanguageDropdownProps = {
  DefaultLanguage: string,
  onLanguageChange: onLanguageChangeCallbackParam,
};

export type LanguageDropdownOption = {
  key: string,
  text: string,
  value: string,
};

export type LanguageDropdownInternalProps = {
  LanguageDropdownPlaceholder: string,
  DefaultLanguage: string,
  LanguageOptions: Array<LanguageDropdownOption>,
  onLanguageChange: (event: React.SyntheticEvent, selectedLanguage: LanguageDropdownOption) => void,
};

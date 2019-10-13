// @flow
import React from 'react';
import { Select } from 'semantic-ui-react';
import { noop } from 'util/common';

import { LanguageDropdownInternalProps } from './LanguageDropdown.flow';
import { LANGUAGE_DROPDOWN_OPTIONS } from './LanguageDropdown.constant';

export function LanguageDropdown(props: LanguageDropdownInternalProps) {
  const {
    LanguageDropdownPlaceholder,
    LanguageOptions,
    DefaultLanguage,
    onLanguageChange,
  } = props;

  return (
    <Select
      placeholder={LanguageDropdownPlaceholder}
      options={LanguageOptions}
      value={DefaultLanguage}
      onChange={onLanguageChange}
    />
  );
}

LanguageDropdown.defaultProps = {
  LanguageDropdownPlaceholder: 'Select a language',
  LanguageOptions: LANGUAGE_DROPDOWN_OPTIONS,
  onLanguageChange: noop,
};

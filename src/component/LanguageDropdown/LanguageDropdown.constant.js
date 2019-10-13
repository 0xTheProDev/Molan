// @flow
import { LANGUAGES, COMPILER_OPTIONS } from 'constants/templates';

import { LanguageDropdownOption } from './LanguageDropdown.flow';

export const LANGUAGE_DROPDOWN_OPTIONS: Array<LanguageDropdownOption> =  LANGUAGES.map(language => {
  return {
    key: language,
    value: language,
    text: COMPILER_OPTIONS[language],
  };
});

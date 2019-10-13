import { onLanguageChangeCallback } from './LanguageDropdown.action';
import { LANGUAGE_DROPDOWN_OPTIONS } from './LanguageDropdown.constant';

describe('Component::LanguageDropdown::LanguageDropdownActions', () => {
  describe('Test onLanguageChange', () => {
    it('should invoke onLanguageChange callback with new value', () => {
      const onLanguageChangeStub = jest.fn();

      const onChangeHandler = onLanguageChangeCallback(onLanguageChangeStub);
      onChangeHandler(null, LANGUAGE_DROPDOWN_OPTIONS[0]);

      expect(onLanguageChangeStub).toHaveBeenCalledWith(LANGUAGE_DROPDOWN_OPTIONS[0].value);
    });
  });
});

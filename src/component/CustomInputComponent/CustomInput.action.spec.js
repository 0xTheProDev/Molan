import { onCustomInputChangeCallback } from './CustomInput.action';

describe('Component::CustomInput::CustomInputActions', () => {
  describe('Test onCustomInputChange', () => {
    it('should invoke onLanguageChange callback with new value', () => {
      const INPUT = 'Some Input Here';
      const onCustomInputStub = jest.fn();

      const onChangeHandler = onCustomInputChangeCallback(onCustomInputStub);
      onChangeHandler(null, { value: INPUT });

      expect(onCustomInputStub).toHaveBeenCalledWith(INPUT);
    });
  });
});

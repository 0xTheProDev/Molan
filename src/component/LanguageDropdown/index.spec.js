import React from 'react';
import { DropdownItem } from 'semantic-ui-react';

import LanguageDropdown from './index';
import { LANGUAGE_DROPDOWN_OPTIONS } from './LanguageDropdown.constant';

describe('Component::LanguageDropdown::Integration Suite', () => {
  let
    onLanguageChangeStub,
    minProps;

  beforeAll(() => {
    onLanguageChangeStub = jest.fn();

    minProps = {
      DefaultLanguage: LANGUAGE_DROPDOWN_OPTIONS[0].value,
      onLanguageChange: onLanguageChangeStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = mount(<LanguageDropdown {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onLanguageChange with new language when selected one', () => {
    const wrapper = mount(<LanguageDropdown {...minProps} />);

    const lastDropdownItem = wrapper
      .find(DropdownItem)
      .last();

    lastDropdownItem.simulate('click');

    expect(onLanguageChangeStub).toHaveBeenCalledWith(lastDropdownItem.props().value);
  });
});

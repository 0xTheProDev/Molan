import React from 'react';
import { Select } from 'semantic-ui-react';

import { LanguageDropdown } from './LanguageDropdown';
import { LANGUAGE_DROPDOWN_OPTIONS } from './LanguageDropdown.constant';

describe('Component::LanguageDropdown::LanguageDropdown', () => {
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
    const wrapper = shallow(<LanguageDropdown {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke onLanguageChange callback when an option is selected', () => {
    const wrapper = shallow(<LanguageDropdown {...minProps} />);

    wrapper
      .find(Select)
      .simulate('change');
    
    expect(onLanguageChangeStub).toHaveBeenCalled();
  });
});

import React from 'react';

import { SettingsDropdown } from './SettingsDropdown';
import { Checkbox } from 'semantic-ui-react';

describe('Component::SettingsDropdown', () => {
  let
    onThemeChangeStub,
    minProps;

  beforeAll(() => {
    onThemeChangeStub = jest.fn();

    minProps = {
      SettingsOptions: [
        {
          key: 'theme',
          label: 'Dark Mode',
          state: false,
          toggleStatus: onThemeChangeStub,
        },
      ],
    };
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<SettingsDropdown {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke callback when state is toggled', () => {
    const wrapper = shallow(<SettingsDropdown {...minProps} />);
    wrapper
      .find(Checkbox)
      .first()
      .simulate('change');

    expect(onThemeChangeStub).toHaveBeenCalled();
  });
});

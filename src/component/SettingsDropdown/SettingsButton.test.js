import React from 'react';

import { SettingsButton } from './SettingsButton';

describe('Settings Button', () => {

  it('should render', () => {
    const wrapper = shallow(SettingsButton);
    expect(wrapper).toMatchSnapshot();
  });
});

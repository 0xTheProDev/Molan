import React from 'react';

import { SettingsDropdown } from './SettingsDropdown';

describe('Settings Dropdown', () => {
  let
    onChangeThemeStub,
    onChangeLineNumStub,
    onChangeMinimapStub,
    onFullScreenStub,
    minProps;

  beforeAll(() => {
    onChangeThemeStub = jest.fn();
    onChangeLineNumStub = jest.fn();
    onChangeMinimapStub = jest.fn();
    onFullScreenStub = jest.fn();

    minProps = {
      darkThemed: false,
      onChangeTheme: onChangeThemeStub,
      lineNumbers: false,
      onChangeLineNum: onChangeLineNumStub,
      minimap: false,
      onChangeMinimap: onChangeMinimapStub,
      isFullScreen: false,
      onFullScreen: onFullScreenStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<SettingsDropdown {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

// @flow
import React from 'react';
import { Button, Checkbox, Popup, Header } from 'semantic-ui-react';

import { SettingsDropdownProps } from './SettingsDropdown.flow';

export function SettingsButton({ SettingsButtonTitle }: SettingsDropdownProps) {
  return (
    <Button floated="right" title={SettingsButtonTitle} basic>
      <Icon name="settings" />
    </Button>
  );
}

export function SettingsOption({ SettingsOptions }: SettingsDropdownProps) {
  return SettingsOptions.map(settingsOption => 
    <Checkbox
      key={settingsOption.key}
      label={settingsOption.label}
      checked={settingsOption.state}
      onChange={settingsOption.toggleStatus}
    />  
  );
}

export function SettingsDropdown(props: SettingsDropdownProps) {
  const { SettingsButtonTitle } = props;

  return (
    <Popup
      trigger={<SettingsButton {...props} />}
      on="click"
      position="bottom center"
    >
      <Header as="h5">{SettingsButtonTitle}</Header>
      {SettingsOption(props)}
    </Popup>
  );
}

SettingsDropdown.defaultProps = {
  SettingsButtonTitle: 'Settings',
  SettingsOptions: [],
};

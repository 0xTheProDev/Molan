// @flow
import React from 'react';
import {
  Popup,
  Checkbox,
  Button,
  Icon,
  Header,
} from 'semantic-ui-react';
import './index.css';

const SettingsButton = (
  <Button floated="right" title="Settings" basic>
    <Icon name="settings" />
  </Button>
);

function SettingsDropdown(props) {
  const {
    darkThemed,
    onChangeTheme,
    lineNumbers,
    onChangeLineNum,
    minimap,
    onChangeMinimap,
    isFullScreen,
    onFullScreen,
  } = props;

  return (
    <div>
      <Popup
        trigger={SettingsButton}
        on="click"
        position="bottom center"
      >
        <Header as="h5">Settings</Header>
        <Checkbox
          label="Night Mode"
          checked={darkThemed}
          onChange={onChangeTheme}
        />
        <Checkbox
          label="Show Line Numbers"
          checked={lineNumbers}
          onChange={onChangeLineNum}
        />
        <Checkbox
          label="Show Minimap"
          checked={minimap}
          onChange={onChangeMinimap}
        />
      </Popup>
      <Button basic
        floated="right"
        title="Full Screen"
        active={isFullScreen}
        onClick={onFullScreen}
      >
        <Icon name="expand" />
      </Button>
    </div>
  );
}

export default SettingsDropdown;

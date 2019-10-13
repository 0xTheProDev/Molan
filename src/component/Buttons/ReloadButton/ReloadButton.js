// @flow
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { noop } from 'util/common';

import { ReloadButtonProps } from './ReloadButton.flow';

export function ReloadButton({ ReloadButtonText, onReload }: ReloadButtonProps) {
  return (
    <Button
      animated
      floated="right"
      title={ReloadButtonText}
      onClick={onReload}
    >
      <Button.Content hidden>{ReloadButtonText}</Button.Content>
      <Button.Content visible>
        <Icon name="redo" />
      </Button.Content>
    </Button>
  );
}

ReloadButton.defaultProps = {
  ReloadButtonText: 'Reload',
  onReload: noop,
};

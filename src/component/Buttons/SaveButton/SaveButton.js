// @flow
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { noop } from 'util/common';

import { SaveButtonInternalProps } from './SaveButton.flow';

export function SaveButton({ SaveButtonText, onSaveButtonClick }: SaveButtonInternalProps) {
  return (
    <Button
      animated="fade"
      floated="right"
      title={SaveButtonText}
      onClick={onSaveButtonClick}
    >
      <Button.Content hidden>{SaveButtonText}</Button.Content>
      <Button.Content visible>
        <Icon name="save" />
      </Button.Content>
    </Button>
  );
}

SaveButton.defaultProps = {
  SaveButtonText: 'Save',
  onSaveButtonClick: noop,
};

// @flow
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { noop } from 'util/common';

import { FullScreenButtonProps } from './FullScreenButton.flow';

export function FullScreenButton(props: FullScreenButtonProps) {
  const {
    isFullScreenMode,
    FullScreenButtonTitle,
    toggleFullScreenMode,
  } = props;

  return (
    <Button
      basic
      floated="right"
      title={FullScreenButtonTitle}
      active={isFullScreenMode}
      onClick={toggleFullScreenMode}
    >
      <Icon name="expand" />
    </Button>
  );
}

FullScreenButton.defaultProps = {
  FullScreenButtonTitle: 'Full Screen',
  toggleFullScreenMode: noop,
};

// @flow
import React from 'react';
import { Button } from 'semantic-ui-react';
import { noop } from 'util/common';

import { SubmitButtonProps } from './SubmitButton.flow';

export function SubmitButton({ SubmitButtonText, onSubmitButtonClick }: SubmitButtonProps) {
  return (
    <Button size='large' floated='right' color='green' onClick={onSubmitButtonClick}>
      {SubmitButtonText}
    </Button>
  );
}

SubmitButton.defaultProps = {
  SubmitButtonText: 'Submit',
  onSubmitButtonClick: noop,
};

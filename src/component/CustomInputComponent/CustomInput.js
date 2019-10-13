// @flow
import React from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';
import { noop } from 'util/common';

import { CustomInputInternalProps } from './CustomInput.flow';

export function CustomInput({ theme, CustomInputPlaceholder, onCustomInputChange }: CustomInputInternalProps) {
  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column stretched>
          <Form>
            <TextArea
              autoHeight
              placeholder={CustomInputPlaceholder}
              onChange={onCustomInputChange}
              className={theme}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

CustomInput.defaultProps = {
  CustomInputPlaceholder: 'Enter your input here',
  onCustomInputChange: noop,
};

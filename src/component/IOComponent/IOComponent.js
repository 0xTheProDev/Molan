// @flow
import React from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';

import { IOComponentInternalProps } from './IOComponent.flow';

export function IOComponent(props: IOComponentInternalProps) {
  const {
    color,
    status,
    input,
    output,
    StatusText,
    CustomInputText,
    CustomOutputText,
    InputFieldPlaceholder,
    OutputFieldPlaceholder,
  } = props;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column color={color}>
          <label htmlFor="compiler_status">{StatusText}</label>
          <span id="compiler_status">{status}</span>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column stretched>
          <Form>
            <label htmlFor="custom_input">{CustomInputText}</label>
            <TextArea
              disabled
              autoHeight
              value={input}
              placeholder={InputFieldPlaceholder}
              id="custom_input"
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column stretched>
          <Form>
            <label htmlFor="custom_output">{CustomOutputText}</label>
            <TextArea
              disabled
              autoHeight
              value={output}
              placeholder={OutputFieldPlaceholder}
              id="custom_output"
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

IOComponent.defaultProps = {
  StatusText: 'Status',
  CustomInputText: 'Custom Input',
  CustomOutputText: 'Custom Output',
  InputFieldPlaceholder: 'No Input Provided',
  OutputFieldPlaceholder: 'No Output to Show',
};

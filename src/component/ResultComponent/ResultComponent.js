// @flow
import React, { PureComponent } from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';

import LoaderComponent from 'component/LoaderComponent';

type Result = {
  input: string,
  output: string,
  status: string,
};

type ResultComponentProps = {
  result: Result,
  submit: boolean,
  onSubmit: (submitting: boolean) => void,
};

export class ResultComponent extends PureComponent<ResultComponentProps> {
  result: Result & {
    color: string,
  };

  constructor(props) {
    super(props);
    this.result = {};
  }

  componentWillReceiveProps(props: ResultComponentProps) {
    const { result } = props;
    const { onSubmit } = this.props;
    const { getColor } = this;

    if (!this.result.hasOwnProperty('id') || this.result.id !== result.id) {
      this.result = result;
      this.result.color = getColor(result.status)
      onSubmit(false);
    }
  }

  getColor = (status: string) => {
    switch (status) {
      case 'Success': return 'green';
      case 'Runtime Error': return 'red';
      case 'Compile Error': return 'yellow';
      default: return 'teal';
    }
  };

  render() {
    const { submit } = this.props;
    const { result } = this;

    if (submit === true) {
      return (<LoaderComponent />);
    }

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column color={result.color}>Status:&emsp;{result.status}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column stretched>
            <Form>
              <label htmlFor="custom_input">Custom Input:</label>
              <TextArea
                disabled
                autoHeight
                value={result.input}
                placeholder="No Input to show"
                id="custom_input"
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column stretched>
            <Form>
              <label htmlFor="custom_output">Custom Output:</label>
              <TextArea
                disabled
                autoHeight
                value={result.output}
                placeholder="No Output to show"
                id="custom_output"
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

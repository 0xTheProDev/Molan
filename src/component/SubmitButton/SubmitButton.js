// @flow
import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';

type SubmissionData = {
  id: number,
  language: string,
  source: string,
  haveInput: string,
  input?: string,
};

type SubmitButtonProps = {
  lang: string,
  code: string,
  checked: boolean,
  input?: string,
  service: {
    status?: boolean,
  },
  submit: (submissionData: SubmissionData) => void,
  onCallback: () => void,
};

export class SubmitButton extends PureComponent<SubmitButtonProps> {
  onClick = () => {
    const {
      lang,
      code,
      checked,
      input,
      service,
      submit,
      onCallback,
    } = this.props;

    if (navigator.onLine && service.hasOwnProperty('status') && service.status === true) {
      const formData: SubmissionData = {
        id: Date.now(),
        language: lang,
        source: code,
        haveInput: checked,
        input: input,
      };
      submit(formData);
      onCallback();
    } else {
      NotificationManager.error('Please check back after several minutes', 'Service Unreachable');
    }
  };

  render() {
    return (
      <Button
        type='button'
        size='large'
        floated='right'
        color='green'
        onClick={this.onClick}
      >Submit</Button>
    );
  }
}

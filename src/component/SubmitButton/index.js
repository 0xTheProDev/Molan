// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import submitAction from 'action/submitAction';
import { Button } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';

class SubmitButton extends PureComponent {
  onClick = () => {
    const { lang, code, checked, input, service, onCallback, submit } = this.props;
    if (navigator.onLine && service.hasOwnProperty('status') && service.status === true) {
      const formData = {
        id: Date.now(),
        language: lang,
        source: code,
        haveInput: checked,
        input: input
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

const mapStateToProps = (state) => {
  return {
    service: state.service
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (d) => dispatch(submitAction(d))
  };
};

export { SubmitButton as PureSubmitButton };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButton);

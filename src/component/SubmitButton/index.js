import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import submitAction from 'action/submitAction';
import { Button } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';

export class SubmitButton extends Component {
    static propTypes = {
        lang:       PropTypes.string.isRequired,
        code:       PropTypes.string.isRequired,
        checked:    PropTypes.bool.isRequired,
        input:      PropTypes.string,
        service:    PropTypes.object.isRequired,
        onCallback: PropTypes.func.isRequired,
        submit:     PropTypes.func.isRequired
    };

    onClick = () => {
        const { lang, code, checked, input, service, onCallback, submit } = this.props;
        if (navigator.onLine && service.hasOwnProperty('status') && service.status === true) {
            const formData = {
                id:        Date.now(),
                language:  lang,
                source:    code,
                haveInput: checked,
                input:     input
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);

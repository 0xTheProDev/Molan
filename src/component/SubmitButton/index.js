import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import submitAction from 'action/submitAction';
import { Button } from 'semantic-ui-react';
import { NotificationManager } from 'react-notifications';
import { HotKeys } from 'react-hotkeys';

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

    keyMap = {
        quickSubmit: 'ctrl+k'
    };

    handlers = {
        'quickSubmit': () => console.log('works')
        
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
            <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
                <Button
                  type='button'
                  size='large'
                  floated='right'
                  color='green'
                  onClick={this.onClick}
                >Submit</Button>
            </HotKeys>
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

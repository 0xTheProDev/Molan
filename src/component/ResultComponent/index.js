import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Form, TextArea } from 'semantic-ui-react';
import LoaderComponent from 'component/LoaderComponent';

export class ResultComponent extends Component {
    static propTypes = {
        submit:   PropTypes.bool.isRequired,
        result:   PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.result = {};
    }

    componentWillReceiveProps(props) {
        const { result } = props;
        const { onSubmit } = this.props;
        const { getColor } = this;

        if (! this.result.hasOwnProperty('id') || this.result.id !== result.id) {
            this.result = result;
            this.result.color = getColor(result.status)
            onSubmit(false);
        }
    }

    getColor = (status) => {
        switch (status) {
            case 'Success':        return 'green';
            case 'Runtime Error':  return 'red';
            case 'Compile Error':  return 'yellow';
            default:               return 'teal';
        }
    };

    render() {
        const { submit } = this.props;
        const { result } = this;

        if (submit === true) {
            return (<LoaderComponent/>);
        }

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column color={result.color}>Status:&emsp;{result.status}</Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column stretched>
                        <Form>
                            <label htmlFor='custom_input'>Custom Input:</label>
                            <TextArea
                              disabled
                              autoHeight
                              value={result.input}
                              placeholder='No Input to show'
                              id='custom_input'
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column stretched>
                        <Form>
                            <label htmlFor='custom_output'>Custom Output:</label>
                            <TextArea
                              readOnly
                              autoHeight
                              value={result.output}
                              placeholder='No Output to show'
                              id='custom_output'
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.form
    };
};

export default connect(mapStateToProps)(ResultComponent);
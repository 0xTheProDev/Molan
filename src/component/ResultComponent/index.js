import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Form, TextArea } from 'semantic-ui-react';
import LoaderComponent from 'component/LoaderComponent';

export default class ResultComponent extends Component {
    static propTypes = {
        submit:   PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    render() {
        const { submit } = this.props;

        if (submit === true) {
            return (<LoaderComponent/>);
        }

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>Status</Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column stretched>
                        <Form>
                            <label htmlFor='custom_input'>Custom Input:</label>
                            <TextArea
                              disabled
                              autoHeight
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
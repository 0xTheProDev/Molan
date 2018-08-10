import React, { Component } from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';

export default class ResultComponent extends Component {
    render() {
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
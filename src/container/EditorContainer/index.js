import React, { Component } from 'react';
import { Grid, Checkbox, Button, Form, TextArea } from 'semantic-ui-react';
import MonacoEditor from 'react-monaco-editor';
import './index.css';
import DropdownSelection from 'component/DropdownSelection';

const requireConfig = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
    paths: {
        'vs': 'https://www.mycdn.com/monaco-editor/0.6.1/min/vs'
    }
};

export default class EditorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'c',
            code: '',
            custom: false,
            input: ''
        };
    }

    onLangChange = (_,d) => {
        this.setState(Object.assign({}, this.state, { lang: d.value }));
    };

    onEditorChange = (d) => {
        this.setState(Object.assign({}, this.state, { code: d }));
    };

    onChecked = () => {
        this.setState(Object.assign({}, this.state, { custom: ! this.state.custom }));
    };

    onInputChange = (_,d) => {
        this.setState(Object.assign({}, this.state, { input: d.value }));
    };

    render() {
        return (
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column stretched>
                        <DropdownSelection
                          defaultLang={this.state.lang}
                          onChange={this.onLangChange}
                        />
                    </Grid.Column>
                    <Grid.Column>{''}</Grid.Column>
                    <Grid.Column>
                        Buttons
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={16} stretched className='editor-col'>
                        <MonacoEditor
                          height='300'
                          width='100%'
                          language={this.state.lang}
                          value={this.state.code}
                          onChange={this.onEditorChange}
                          requireConfig={requireConfig}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Checkbox
                          label="Custom Input"
                          onChange={this.onChecked}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                          type='button'
                          size='large'
                          floated='right'
                          color='green'
                        >Submit</Button>
                    </Grid.Column>
                </Grid.Row>
                {
                    this.state.custom &&
                    <Grid.Row columns={1}>
                        <Grid.Column stretched>
                            <Form>
                                <TextArea
                                  autoHeight
                                  placeholder='Enter your input here'
                                  onChange={this.onInputChange}
                                />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                }
            </Grid>
        );
    }
}
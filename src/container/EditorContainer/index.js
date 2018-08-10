import React, { Component } from 'react';
import { Grid, Checkbox, Button, Form, TextArea } from 'semantic-ui-react';
import MonacoEditor from 'react-monaco-editor';
import './index.css';
import DropdownSelection from 'component/DropdownSelection';
import ButtonGroup from 'component/ButtonGroup';
import SettingsDropdown from 'component/SettingsDropdown';
import template from 'util/template';
import { get, set, remove } from 'util/store';

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
            lang: '',
            code: '',
            custom: false,
            input: '',
            theme: 'vs-light',
            options: {
                lineNumbers: true,
                rulers: false
            }
        };
        this.code = [];
    }

    componentDidMount() {
        const temp = get('molan');
        if (Array.isArray(temp)) {
            this.code = Array.from(temp);
        } else {
            this.code = Array.from(template);
        }
        const item = this.code.find(e => e.lang === 'c');
        this.setState(Object.assign({}, this.state, { lang: 'c', code: item ? item.code : '' }));
    }

    onLangChange = (_,d) => {
        const { code, lang } = this.state;
        if (code.length !== 0) {
            const item = this.code.find(e => e.lang === lang);
            if (typeof item === 'undefined' || item === null) {
                this.code.push({ lang, code });
            } else {
                item.code = code;
            }
        }
        set('molan', this.code);
        let temp;
        const item = this.code.find(e => e.lang === d.value);
        if (typeof item === 'undefined' || item === null) {
            temp = template.find(e => e.lang === d.value).code;
        } else {
            temp = item.code;
        }
        this.setState(Object.assign({}, this.state, { lang: d.value, code: temp }));
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

    onReset = () => {
        console.log('here');
        
        remove('molan');
        this.code = Array.from(template);
        const item = this.code.find(e => e.lang === this.state.lang);
        this.setState(Object.assign({}, this.state, { code: item ? item.code : '' }));
    };

    onChangeLineNum = () => {
        const options = Object.assign({}, this.state.options);
        options.lineNumbers = ! options.lineNumbers;
        this.setState(Object.assign({}, this.state, { options: options }));
    };

    onChangeTheme = () => {
        const theme = this.state.theme === 'vs-light' ? 'vs-dark' : 'vs-light';
        this.setState(Object.assign({}, this.state, { theme: theme }));
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
                        <SettingsDropdown
                          defaultChecked={this.state.options.lineNumbers}
                          darkThemed={this.state.theme === 'vs-dark'}
                          onChangeLineNum={this.onChangeLineNum}
                          onChangeTheme={this.onChangeTheme}
                        />
                        <ButtonGroup
                          onReload={this.onReset}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={16} stretched className='editor-col'>
                        <MonacoEditor
                          height='300'
                          width='100%'
                          theme={this.state.theme}
                          language={this.state.lang}
                          value={this.state.code}
                          onChange={this.onEditorChange}
                          options={this.state.options}
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
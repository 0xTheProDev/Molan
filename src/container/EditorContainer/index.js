import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react';
import Fullscreen from "react-full-screen";
import MonacoEditor from 'react-monaco-editor';
import './index.css';
import DropdownSelection from 'component/DropdownSelection';
import ButtonGroup from 'component/ButtonGroup';
import SettingsDropdown from 'component/SettingsDropdown';
import SubmitButton from 'component/SubmitButton';
import template from 'util/template';
import { get, set, remove } from 'util/store';

const requireConfig = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.14.0/min/vs/'
    }
};

export default class EditorContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

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
                fullScreen: false,
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

    updateCache = () => {
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
    };

    onLangChange = (_,d) => {
        this.updateCache();
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

    onFullScreen = () => {
        const options = Object.assign({}, this.state.options);
        options.fullScreen = ! options.fullScreen;
        this.setState(Object.assign({}, this.state, { options: options }));
    }

    onSubmit = () => {
        this.updateCache();
        this.props.onSubmit(true);
    }

    render() {
        const { lang, code, custom, input, theme, options } = this.state;
        return (
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column stretched>
                        <DropdownSelection
                          defaultLang={lang}
                          onChange={this.onLangChange}
                        />
                    </Grid.Column>
                    <Grid.Column>{''}</Grid.Column>
                    <Grid.Column className='lg-only'>
                        <SettingsDropdown
                          defaultChecked={options.lineNumbers}
                          darkThemed={theme === 'vs-dark'}
                          onChangeLineNum={this.onChangeLineNum}
                          onChangeTheme={this.onChangeTheme}
                          isFullScreen={options.fullScreen}
                          onFullScreen={this.onFullScreen}
                        />
                        <ButtonGroup
                          lang={lang}
                          code={code}
                          onChange={this.onEditorChange}
                          onReload={this.onReset}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={16} stretched className='editor-col'>
                        <Fullscreen
                          enabled={options.fullScreen}
                          onChange={this.onFullScreen}
                        >
                            <MonacoEditor
                              height='300'
                              width='100%'
                              theme={theme}
                              language={lang === 'python3' ? 'python' : lang}
                              value={code}
                              onChange={this.onEditorChange}
                              options={options}
                              requireConfig={requireConfig}
                            />
                        </Fullscreen>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Checkbox
                          label="Custom Input"
                          checked={custom}
                          onChange={this.onChecked}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SubmitButton
                          lang={lang}
                          code={code}
                          checked={custom}
                          input={input}
                          onCallback={this.onSubmit}
                        />
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
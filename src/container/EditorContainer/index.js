// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco';
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react';
import Fullscreen from 'react-full-screen';
import './index.css';
import DropdownSelection from 'component/DropdownSelection';
import ButtonGroup from 'component/ButtonGroup';
import SettingsDropdown from 'component/SettingsDropdown';
import SubmitButton from 'component/SubmitButton';
import template from 'util/template';
import { get, set, remove } from 'util/store';

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
            theme: 'light',
            options: {
                lineNumbers: true,
                fullScreen: false,
                minimap: false
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

    triggerNightMode = () => {
        const { theme } = this.state;

        const now  = Date.now();
        const time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0, 0);
        let diff = time - now;
        if (diff < 0) {
            if (theme === 'light')
                this.onChangeTheme();
            diff += 43200000;
            window.setTimeout(() => theme === 'dark' && this.onChangeTheme(), diff);
        } else {
            window.setTimeout(() => theme === 'light' && this.onChangeTheme(), diff);
        }
    };

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
        this.setState({ lang: d.value, code: temp });
    };

    onEditorChange = (d: string) => {
        this.setState({ code: d });
    };

    onChecked = () => {
        this.setState({ custom: ! this.state.custom });
    };

    onInputChange = (_,d) => {
        this.setState({ input: d.value });
    };

    onReset = () => {
        remove('molan');
        this.code = Array.from(template);
        const item = this.code.find(e => e.lang === this.state.lang);
        this.setState({ code: item ? item.code : '' });
    };

    onChangeLineNum = () => {
        const options = Object.assign({}, this.state.options);
        options.lineNumbers = ! options.lineNumbers;
        this.setState({ options });
    };

    onChangeMinimap = () => {
        const options = Object.assign({}, this.state.options);
        options.minimap = ! options.minimap;
        this.setState({ options });
    };

    onChangeTheme = () => {
        const theme = this.state.theme === 'light' ? 'dark' : 'light';
        this.props.onDark(theme === 'dark');
        this.setState({ theme });
    };

    onFullScreen = () => {
        const options = Object.assign({}, this.state.options);
        options.fullScreen = ! options.fullScreen;
        this.setState(Object.assign({}, this.state, { options }));
    };

    onSubmit = () => {
        this.updateCache();
        this.props.onSubmit(true);
    };

    render() {
        const { lang, code, custom, input, theme, options } = this.state;

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4} stretched>
                        <DropdownSelection
                          defaultLang={lang}
                          onChange={this.onLangChange}
                        />
                    </Grid.Column>
                    <Grid.Column width={12} className='lg-only'>
                        <SettingsDropdown
                          lineNumbers={options.lineNumbers}
                          minimap={options.minimap}
                          darkThemed={theme === 'dark'}
                          onChangeLineNum={this.onChangeLineNum}
                          onChangeMinimap={this.onChangeMinimap}
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
                              height={options.fullScreen ? 800 : 300}
                              width='100%'
                              hideMinimap={!options.minimap}
                              hideLineNumbers={!options.lineNumbers}
                              theme={theme}
                              language={lang === 'python3' ? 'python' : lang}
                              value={code}
                              onContentChange={this.onEditorChange}
                            />
                        </Fullscreen>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Checkbox
                          label='Custom Input'
                          checked={custom}
                          onChange={this.onChecked}
                          className='input-checkbox'
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
                                  className={theme === 'vs-dark' ? 'dark' : ''}
                                />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                }
            </Grid>
        );
    }
}

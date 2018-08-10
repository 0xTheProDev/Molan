import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import saveAs from 'save-as';
import template from 'util/template';

export default class ButtonGroup extends Component {
    static propTypes = {
        lang:     PropTypes.string.isRequired,
        code:     PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onReload: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.fileBtn = null;
    }

    onFileBtnClick = () => {
        this.fileBtn.click();
    };

    onFileBtnChange = (e) => {
        const { onChange } = this.props;
        const fileReader = new FileReader();
        fileReader.onload = function(f) {
            onChange(f.target.result);
        }
        fileReader.readAsText(e.target.files[0], 'utf-8');
    };

    onSaveBtnClick = () => {
        const { lang, code } = this.props;
        const blob = new Blob([ code ], { type: 'text/plain;charset=ascii' });
        const item = template.find(e => e.lang === lang);
        saveAs(blob, `molan${item ? item.ext : '.txt'}`);
    };

    render() {
        const { onReload } = this.props;

        return (
            <div>
                <Button animated='fade' floated='right' onClick={this.onSaveBtnClick}>
                    <Button.Content hidden>Save</Button.Content>
                    <Button.Content visible>
                        <Icon name='save'/>
                    </Button.Content>
                </Button>
                <Button animated floated='right' onClick={() => onReload()}>
                    <Button.Content hidden>Reload</Button.Content>
                    <Button.Content visible>
                        <Icon name='redo'/>
                    </Button.Content>
                </Button>
                <Button animated='vertical' floated='right' onClick={this.onFileBtnClick}>
                    <Button.Content hidden>Upload</Button.Content>
                    <Button.Content visible>
                        <Icon name='upload'/>
                    </Button.Content>
                    <input
                      type='file'
                      accepts=".c,.cpp,.java,.js,.py"
                      style={{ display: 'none' }}
                      ref={input => this.fileBtn = input}
                      onChange={this.onFileBtnChange}
                    />
                </Button>
            </div>
        );
    }
}
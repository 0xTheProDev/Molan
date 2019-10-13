// @flow
import React, { PureComponent } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import saveAs from 'save-as';

import template from 'util/template';

import Styles from './ButtonGroup.module.css';

type ButtonGroupProps = {
  lang: string,
  code: string,
  onChange: (text: string) => void,
  onReload: () => void,
};

export class ButtonGroup extends PureComponent {
  fileBtn: ?React.Node;

  constructor(props: ButtonGroupProps) {
    super(props);
    this.fileBtn = null;
  }

  onFileBtnClick = () => {
    this.fileBtn.click();
  };

  onFileBtnChange = (e) => {
    const { onChange } = this.props;
    const fileReader = new FileReader();
    fileReader.onload = function (f) {
      onChange(f.target.result);
    }
    fileReader.readAsText(e.target.files[0], 'utf-8');
  };

  onSaveBtnClick = () => {
    const { lang, code } = this.props;
    const blob = new Blob([code], { type: 'text/plain;charset=ascii' });
    const item = template.find(e => e.lang === lang);
    saveAs(blob, `molan${item ? item.ext : '.txt'}`);
  };

  render() {
    const { onReload } = this.props;

    return (
      <React.Fragment>
        <Button animated="fade" floated="right" onClick={this.onSaveBtnClick}>
          <Button.Content hidden>Save</Button.Content>
          <Button.Content visible>
            <Icon name="save" />
          </Button.Content>
        </Button>
        <Button animated floated="right" onClick={onReload}>
          <Button.Content hidden>Reload</Button.Content>
          <Button.Content visible>
            <Icon name="redo" />
          </Button.Content>
        </Button>
        <Button animated="vertical" floated="right" onClick={this.onFileBtnClick}>
          <Button.Content hidden>Upload</Button.Content>
          <Button.Content visible>
            <Icon name="upload" />
          </Button.Content>
          <input
            type="file"
            accepts=".c,.cpp,.java,.js,.py"
            ref={input => this.fileBtn = input}
            onChange={this.onFileBtnChange}
            className={Styles['file-input']}
          />
        </Button>
      </React.Fragment>
    );
  }
}

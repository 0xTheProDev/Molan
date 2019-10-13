// @flow
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { noop } from 'util/common';

import { UploadButtonInternalProps } from './UploadButton.flow';
import Styles from './UploadButton.module.css';

export function UploadButton(props: UploadButtonInternalProps) {
  const {
    InputElementRef,
    UploadButtonText,
    AllowedFileTypes,
    onClickHandler,
    onChangeHandler,
  } = props;

  return (
    <Button
      animated="vertical"
      floated="right"
      title={UploadButtonText}
      onClick={onClickHandler}
    >
      <Button.Content hidden>{UploadButtonText}</Button.Content>
      <Button.Content visible>
        <Icon name="upload" />
      </Button.Content>
      <input
        ref={InputElementRef}
        type="file"
        accepts={AllowedFileTypes}
        onChange={onChangeHandler}
        className={Styles['file-input']}
      />
    </Button>
  );
}

UploadButton.defaultProps = {
  UploadButtonText: 'Upload',
  onChangeHandler: noop,
  onClickHandler: noop,
};

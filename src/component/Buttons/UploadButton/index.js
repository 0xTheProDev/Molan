// @flow
import React from 'react';
import { MIME_TYPES } from 'constants/templates';

import { UploadButton } from './UploadButton';
import { UploadButtonProps } from './UploadButton.flow';
import { onFileButtonClick, onFileInputChange } from './UploadButton.action';

export default function UploadButtonFactory(props: UploadButtonProps) {
  const {
    UploadButtonText,
    onUploadFile,
    onUploadFileError,
  } = props;

  const AllowedMimeTypes = new Set(Object.values(MIME_TYPES));
  const AllowedFileTypes = Array.from(AllowedMimeTypes).join(',');

  const InputElementRef = React.createRef();

  const onClickHandler = onFileButtonClick(InputElementRef);
  const onChangeHandler = onFileInputChange(onUploadFile, onUploadFileError);

  return (
    <UploadButton
      AllowedFileTypes={AllowedFileTypes}
      InputElementRef={InputElementRef}
      UploadButtonText={UploadButtonText}
      onClickHandler={onClickHandler}
      onChangeHandler={onChangeHandler}
    />
  );
}

export { UploadButtonProps, UploadButtonFactory as UploadButton };

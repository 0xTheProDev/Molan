// @flow
import React from 'react';

import { SaveButtonProps } from './SaveButton.flow';
import { onSaveButtonClick } from './SaveButton.action';
import { SaveButton } from './SaveButton';

export default function SaveButtonFactory(props: SaveButtonProps) {
  const {
    language,
    content,
    SaveButtonText,
  } = props;

  const onClickHandler = onSaveButtonClick(props.language, props.content);

  return (
    <SaveButton
      SaveButtonText={SaveButtonText}
      onSaveButtonClick={onClickHandler}
    />
  );
}

export { SaveButtonProps, SaveButtonFactory as SaveButton };

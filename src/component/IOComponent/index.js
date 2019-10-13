// @flow
import React from 'react';

import { IOComponentProps } from './IOComponent.flow';
import { IOComponent } from './IOComponent';
import { STATUS_TEXT_MAPPING, STATUS_COLOR_MAPPING } from './IOComponent.constants';

export default function IOComponentFactory({ status, input, output }: IOComponentProps) {
  const Color = STATUS_COLOR_MAPPING[status];
  const Status = STATUS_TEXT_MAPPING[status];

  return (
    <IOComponent
      color={Color}
      status={Status}
      input={input}
      output={output}
    />
  );
}

export { IOComponentProps, IOComponentFactory as IOComponent };

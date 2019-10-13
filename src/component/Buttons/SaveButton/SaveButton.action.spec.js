import * as SaveAs from 'save-as';
import { MIME_TYPES, FILE_EXTENSIONS } from 'constants/templates';

import { onSaveButtonClick } from './SaveButton.action';

describe('Component::Buttons:SaveButton::SaveButtonActions', () => {
  const
    Language   = 'c',
    Content    = '#include <stdio.h>\n\nint main(void) {\n\nreturn 0;\n}\n';

  let
    originalURLConstructor,
    originalBlobConstructor,
    blobConstructorStub,
    saveAsStub;

  beforeAll(() => {
    saveAsStub = jest.spyOn(SaveAs, 'saveAs');

    originalURLConstructor = URL;
    originalBlobConstructor = Blob;
    blobConstructorStub = jest.fn();

    global.Blob = blobConstructorStub;
    global.URL = {
      createObjectURL: jest.fn(),
    };
  });

  afterAll(() => {
    jest.restoreAllMocks();
    global.URL = originalURLConstructor;
    global.Blob = originalBlobConstructor;
  });

  it('should save content in a file when callback invoked', () => {
    const
      BlobObject      = new Blob(),
      onClickListener = onSaveButtonClick(Language, Content);

    onClickListener();

    expect(blobConstructorStub).toHaveBeenCalledWith([ Content ], { type: MIME_TYPES[Language] });
    expect(saveAsStub).toHaveBeenCalledWith(BlobObject, `molan${FILE_EXTENSIONS[Language]}`);
  });
});

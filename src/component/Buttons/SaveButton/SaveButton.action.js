// @flow
import { saveAs } from 'save-as';
import { MIME_TYPES, FILE_EXTENSIONS } from 'constants/templates';

export function onSaveButtonClick(language: string, content: string) {
  return function onClickHandler(event: MouseEvent): void {
    const MimeType = MIME_TYPES[language] || MIME_TYPES['text'];
    const Extension = FILE_EXTENSIONS[language] || FILE_EXTENSIONS['text'];

    const blob = new Blob([ content ], { type: MimeType });
    const FileName = `molan${Extension}`;

    saveAs(blob, FileName);
  }
}

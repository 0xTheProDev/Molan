// @flow
export type LanguageTemplate = {
  name: string,
  language: string,
  code: string,
  mime: string,
  extension: string,
};

export type LanguageTemplateOptions = {
  [language: string]: string,
};

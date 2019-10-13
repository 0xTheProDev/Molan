// @flow
import { LanguageTemplate, LanguageTemplateOptions } from 'types/template.flow';

const c_template =
`#include <stdio.h>

int main(void) {
  /* Your Code Here */
  return 0;
}
`;

const cpp_template =
`#include <iostream>
using namespace std;

int main() {
  // Your Code Here
  return 0;
}
`;

const java_template =
`import java.io.*;

class Molan {
  public static void main (String[] args) {
    // Your Codes Here
  }
}
`;

const py_template =
`# Write Codes Here
`;

const mips_template =
`    .text
main:
  # Your Codes Here
`;

const ver_template =
`/** Workbench Module */
module wb;
  /** Main Simulation Here */
endmodule
`;

export const LANGUAGES = Object.freeze([
  'c',
  'cpp',
  'java',
  'python',
  'python3',
  'mips',
  'verilog',
]);

export const COMPILER_OPTIONS: LanguageTemplateOptions = Object.freeze({
  c: 'C (GCC 6.3)',
  cpp: 'C++ (G++ 6.3)',
  java: 'Java (OpenJDK 0.8)',
  python: 'Python (Python 2.7)',
  python3: 'Python (Python 3.6)',
  mips: 'MIPS-IV (Simulator 0.4)',
  verilog: 'Verilog (iVerilog 10.0)',
});

export const LANGUAGE_TEMPLATES: LanguageTemplateOptions = Object.freeze({
  c: c_template,
  cpp: cpp_template,
  java: java_template,
  python: py_template,
  python3: py_template,
  mips: mips_template,
  verilog: ver_template,
});

export const MIME_TYPES: LanguageTemplateOptions = Object.freeze({
  c: 'text/x-csrc',
  cpp: 'text/x-c++src',
  java: 'text/x-java',
  python: 'text/x-python',
  python3: 'text/x-python',
  mips: 'text/plain',
  verilog: 'text/plain',
  text: 'text/plain',
});

export const FILE_EXTENSIONS: LanguageTemplateOptions = Object.freeze({
  c: '.c',
  cpp: '.cxx',
  java: '.java',
  python: '.py',
  python3: '.py',
  mips: '.s',
  verilog: '.v',
  text: '.txt',
});

const LANGUAGE_OPTIONS: LanguageTemplate[] = LANGUAGES.reduce((acc: LanguageTemplate[], currentLanguage: string) => {
  acc.push({
    language: currentLanguage,
    name: COMPILER_OPTIONS[currentLanguage],
    code: LANGUAGE_TEMPLATES[currentLanguage],
    mime: MIME_TYPES[currentLanguage],
    extenstion: FILE_EXTENSIONS[currentLanguage],
  });
  return acc;
}, []);

export default Object.freeze(LANGUAGE_OPTIONS);

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

export default [
    { lang: 'c',       code: c_template,    name: 'C (GCC 6.3)',             ext: '.c' },
    { lang: 'cpp',     code: cpp_template,  name: 'C++ (G++ 6.3)',           ext: '.cpp' },
    { lang: 'java',    code: java_template, name: 'Java (OpenJDK 0.8)',      ext: '.java'},
    { lang: 'python',  code: py_template,   name: 'Python (Python 2.7)',     ext: '.py' },
    { lang: 'python3', code: py_template,   name: 'Python (Python 3.6)',     ext: '.py' },
    { lang: 'MIPS',    code: mips_template, name: 'MIPS-IV (Simulator 0.4)', ext: '.s' },
    { lang: 'Verilog', code: ver_template,  name: 'Verilog (iVerilog 10.0)', ext: '.v' }
];
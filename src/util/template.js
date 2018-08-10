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

export default [
    { lang: 'c',      code: c_template },
    { lang: 'cpp',    code: cpp_template},
    { lang: 'java',   code: java_template},
    { lang: 'python', code: py_template }
];
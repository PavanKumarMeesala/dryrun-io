export const LANGUAGE_VERSIONS = {
  c: "10.2.0",
  cpp: "10.2.0",
  javascript: "1.32.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "5.0.201",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!\\n");\n\treturn 0;\n}\n`,
  cpp: `#include <iostream>\nusing namespace std; \n\nint main() {\n\tcout << "Hello, World!" << endl;\n\treturn 0;\n}\n`,
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World"); \n \t\t  // code here\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};
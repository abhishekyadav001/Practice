
## Class Notes

1. Initialize it by running command in terminal `npm init -y`.
2. Install the typescript lang by using this cli `npm install -g typescript`.
3. check if the typescirpt is installed or not by this cli `tsc -v`.
4. Create a `src` folder and create a `index.ts` file.
5. Create a script in package.json by using this , "build":"tsc --watch".
6 Create a `tsconfig.json` file and copy the file from preclass notes. 


## Compiler VS Transpiler

### Compiler -->

- Compiler is convert high level  language to low level  lang.
- Low level means hardware readeble code (binary).
- high level language is nothing but a programming language which is readable by humans and easy to understand.


### Transpiler 

- Transpiler is convert high level lang to another high level lang.
- it also convert logic as well as syntax of codes .
- Babel is not transpiler.
- Transpiler can convert ES6 to ES3.

## Statically Type Language VS Dynamically Type Language.

->code->compile->excutable->run.

### Dynamically Typed Language.

- The compiler doesn't know about the type of varaible at time of code execuation.
- In that variable we can assign any type of value while declaring. 
- let x =10;
- x = 'abhishek'
- so here we can continuesly change the type of variables.
- x-10 when we do that at that time we get an syntax error 
- JS,python,ruby,etc.

### Statically Typed Language.

- The compiler know the type of variable at time of code execuation.
- Here while declaring we need to give type of value which will we gonna asign it to that varaible.
- int x; 
- this is how we declare variable in typed language.
- this typed language is faster than typed language.
- C,C++,Java,TypeScript, etc.


## TypeScript

- TypeScript is static Typed language.
- Typescript --> transpile - `tsc` --> JS.
- Superset of JS.
- let x:string = 'Masai'
- let y:number =234
- 

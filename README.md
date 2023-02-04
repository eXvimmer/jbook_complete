# 🚀 JBook (CLI, Local API, Local Client)

Complete project of [React and Typescript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/) course. You can find the whole repo at [Github](https://github.com/MadAitcH/jbook_complete) or [NPM](https://www.npmjs.com/package/bronote).
You can also find the code for local client (React app) at [this Git repo](https://github.com/MadAitcH/jbook_local_client).

## Technology used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [esbuild](https://www.npmjs.com/package/esbuild)
- [esbuild-wasm](https://www.npmjs.com/package/esbuild-wasm)
- [express](https://www.npmjs.com/package/express)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [lerna](https://www.npmjs.com/package/lerna)
- [monaco-editor](https://www.npmjs.com/package/monaco-editor)
- [prettier](https://www.npmjs.com/package/prettier)

## Quick Start

Download the zip file or Clone this repo, using:

```bash
git clone https://github.com/eXvimmer/jbook_complete.git
```

Install the dependencies:

```bash
npm install
```

## Running Published App At NPM

- Install globally

```bash
npm install -g bronote
```

- Using npx

```bash
npx bronote serve
```

### CLI Options

```bash
bronote serve
bronote serve [filename]
bronote serve --port <number>
bronote serve [filename] --port <number>
bronote serve -p <number> [dir]/[filename]
```

- The default filename is `notebook.js`.

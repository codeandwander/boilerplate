# Boilerplate

A boilerplate for developing basic websites, i.e HTML, SCSS and JavaScript.

## Installation

```bash
$ git clone https://github.com/codeandwander/boilerplate.git
$ cd boilerplate
$ yarn/npm install
```

## To run in development
```bash
$ npm run dev
```

## To deploy
```bash
$ npm run deploy
$ //push/upload to hosting provider
$
$ npm run start-production //for testing production locally
```

## Staging env
```bash
$ npm run deploy
$ npm run start-staging
```

## Application Structure

App structure is currently organised by feature.

```
.
├── app                      # Main app folder
├── assets                   # Main assets folder
│   ├── fonts
│   ├── html
│   ├── img
│   ├── js
│   ├── scss
├── local                    # A compiled env used for development
├── production               # A compiled env used for production
```

## What's included
* Webpack
* Webpack Dev Server
* Style, CSS, SCSS and font loaders
* Deployment builder
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

Work from the assets folder and stay our of the local and production build folders

```
.
├── assets                            # Main assets folder
│   ├── fonts													# Put all fonts in'ere
│   ├── html  												# Main index.html template is inside
│   ├── img 													# Put all images in here
│   ├── js 														# Put all your JavaScript in here
│   ├── scss 													# Put all your SCSS in here
├── local                             # A compiled environment used for development
├── production                        # A compiled environment used for production
├── eslintrc.json                     # Keeping JS neat & tidy
├── .gitignore           		          # Ignore various stuffz
├── package.json                      # Dependancies and bits
├── README.md                         # This very file 👀
├── server.js                         # For serving up our delicious local and production enviroments
├── webpack.local.config.js           # Handles building local enviroment
├── webpack.production.config.js      # Handles building production enviroment
├── yarn.lock                         # Some yarn thing...
```

## What's included
* Webpack
* Webpack Dev Server
* Style, CSS, SCSS and font loaders - autoprefixer, eslint
* Deployment builder, minifies everything
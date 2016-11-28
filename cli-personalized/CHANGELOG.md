# Changes
## Unit Test
Use PhantomJS instead of Chrome
- `npm uninstall -D karma-chrome-launcher`
- `npm install -D karma-phantomjs-launcher`
- replace chrome launcher by phantomjs launcher in `karma.conf.js`

## E2E  
All end to end testing code using protractor is removed. End to end test will be written in Java using Selenide.
- Remove `e2e` directory
- Remove e2e ignore rules in `.gitignore`
- Remove e2e configuration in `angular-cli.json`
- Remove e2e scripts in `package.json`
- `npm uninstall -D protractor`
- `npm uninstall -D jasmine-spec-reporter`
- `npm uninstall -D webdriver-manager`
- Remove `protractor.conf.js`
- Remove e2e documentation from `README.md`

# Commands
- `ng help`
- `ng new`, `ng init`
  * Create new angular-cli project in a new or current directory
- `ng generate`
  * generate a component, direcive, pipe, service, class, interface, enum or module
- `ng lint`
- `ng test`
  * `--watch`
  * `--single-run`
  * `--code-coverage`
- `ng build`
  * `--target`
  * `--environment`
- `ng serve`
  * `--port`
  * `--proxy-config`
  * `--target`
  * `--environment`
  * `--open`

# CLI vs Gulp
- Dependencies
  * cli: npm
  * gulp: npm + bower
- Lint
  * cli: tslint
  * gulp: eslint
- Karma
  * cli: 
    + reporter: progress
    + browser: chrome
  * gulp: 
    + reporter: mocha
    + browser: phantomjs

# To Do
- Go over all files

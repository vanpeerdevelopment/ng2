# Changes
## E2E  
All end to end testing code using protractor is removed. End to end test will be written in Java using Selenide.
- Remove `e2e` directory
- Remove e2e ignore rules in `.gitignore`
- Remove e2e configuration in `angular-cli.json`
- Remove e2e scripts in `package.json`
- `npm uninstall -D protractor`
- `npm uninstall -D jasmine-spec-reporter`
- `npm uninstall -D webdriver-manager`
- Remove `.protractor.conf.js`
- Remove e2e documentation from `README.md`

# To Do
- Go over all files
- Go over all commands
- Compare with own gulp setup
- Prune stuff that's not needed

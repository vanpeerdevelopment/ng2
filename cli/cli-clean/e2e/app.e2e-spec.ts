import { CliCleanPage } from './app.po';

describe('cli-clean App', function() {
  let page: CliCleanPage;

  beforeEach(() => {
    page = new CliCleanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

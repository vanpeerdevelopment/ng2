import { CliPersonalizedPage } from './app.po';

describe('cli-personalized App', function() {
  let page: CliPersonalizedPage;

  beforeEach(() => {
    page = new CliPersonalizedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

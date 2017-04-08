import { PortfolioAwdPage } from './app.po';

describe('portfolio-awd App', () => {
  let page: PortfolioAwdPage;

  beforeEach(() => {
    page = new PortfolioAwdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

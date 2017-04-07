import { DiskoWebPage } from './app.po';

describe('disko-web App', () => {
  let page: DiskoWebPage;

  beforeEach(() => {
    page = new DiskoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

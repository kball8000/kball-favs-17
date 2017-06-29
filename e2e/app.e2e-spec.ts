import { FavsPage } from './app.po';

describe('favs App', () => {
  let page: FavsPage;

  beforeEach(() => {
    page = new FavsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

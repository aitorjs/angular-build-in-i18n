import { I18nPage } from './app.po';

describe('i18n App', () => {
  let page: I18nPage;

  beforeEach(() => {
    page = new I18nPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

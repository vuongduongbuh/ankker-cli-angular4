import { AnkkerPage } from './app.po';

describe('ankker App', () => {
  let page: AnkkerPage;

  beforeEach(() => {
    page = new AnkkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { ServicesExamplePage } from './app.po';

describe('services-example App', () => {
  let page: ServicesExamplePage;

  beforeEach(() => {
    page = new ServicesExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

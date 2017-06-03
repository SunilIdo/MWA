import { HW12AppPage } from './app.po';

describe('hw12-app App', function() {
  let page: HW12AppPage;

  beforeEach(() => {
    page = new HW12AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

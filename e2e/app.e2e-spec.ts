import { My2ndprojPage } from './app.po';

describe('my2ndproj App', function() {
  let page: My2ndprojPage;

  beforeEach(() => {
    page = new My2ndprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

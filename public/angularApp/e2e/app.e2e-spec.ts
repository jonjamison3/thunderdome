import { ThunderdomePage } from './app.po';

describe('thunderdome App', function() {
  let page: ThunderdomePage;

  beforeEach(() => {
    page = new ThunderdomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

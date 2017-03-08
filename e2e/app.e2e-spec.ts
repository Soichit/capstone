import { CapstonePage } from './app.po';

describe('capstone App', () => {
  let page: CapstonePage;

  beforeEach(() => {
    page = new CapstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

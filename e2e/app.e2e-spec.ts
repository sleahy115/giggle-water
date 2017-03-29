import { GiggleWaterPage } from './app.po';

describe('giggle-water App', () => {
  let page: GiggleWaterPage;

  beforeEach(() => {
    page = new GiggleWaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { KHANTravelsAppPage } from './app.po';

describe('khantravels-app App', function() {
  let page: KHANTravelsAppPage;

  beforeEach(() => {
    page = new KHANTravelsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

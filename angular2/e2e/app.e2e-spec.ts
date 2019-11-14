import { Prueba2Page } from './app.po';

describe('prueba2 App', function() {
  let page: Prueba2Page;

  beforeEach(() => {
    page = new Prueba2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

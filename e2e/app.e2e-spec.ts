import { TimerTestPage } from './app.po';

describe('timer-test App', () => {
  let page: TimerTestPage;

  beforeEach(() => {
    page = new TimerTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { NGCSchoolSchedulerPage } from './app.po';

describe('ngcschool-scheduler App', () => {
  let page: NGCSchoolSchedulerPage;

  beforeEach(() => {
    page = new NGCSchoolSchedulerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

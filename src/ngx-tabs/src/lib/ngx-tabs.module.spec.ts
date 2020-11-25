// Project
import { NgxTabsModule } from './ngx-tabs.module';



describe('NgxThemesModule', () => {
  let ngxThemesModule: NgxTabsModule;


  beforeEach(() => {
    ngxThemesModule = new NgxTabsModule();
  });


  it('be created', () => {
    expect(ngxThemesModule).toBeTruthy();
  });


});

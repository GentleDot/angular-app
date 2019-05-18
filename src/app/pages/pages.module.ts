import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {TestPageComponent} from './test-page/test-page.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';


const PAGES_COMPONENTS = [
  PagesComponent,
  TestPageComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    HttpClientModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,

  ],
})
export class PagesModule {
}

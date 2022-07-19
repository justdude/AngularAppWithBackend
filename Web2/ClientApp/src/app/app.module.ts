import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FinanceGridComponent } from './finance-grid/finance-grid.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FinanceGridComponent,
    ContactsInfoComponent,
    CsvUploaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'finance', component: FinanceGridComponent },
      { path: 'csv-upload', component: CsvUploaderComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

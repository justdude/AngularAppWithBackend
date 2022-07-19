import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { from, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { FinanceGridComponent } from './finance-grid/finance-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CsvUploaderComponent,
    ContactsInfoComponent,
    FinanceGridComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      // { path: 'finance-grid', component: FinanceGridComponent },
      // { path: 'csv-uploader', component: CsvUploaderComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

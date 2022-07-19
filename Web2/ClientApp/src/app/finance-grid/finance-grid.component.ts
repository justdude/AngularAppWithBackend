import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finance-grid',
  templateUrl: './finance-grid.component.html',
  styleUrls: ['./finance-grid.component.css']
})

interface PeriodData
{
    FirstPrice:number;
    LastPrice:number;
    MaxPrice:number;
    MinPrice:number;
    Sum:number;
    Time:Date;
}

export class FinanceGridComponent implements OnInit {
  public financeInfos: PeriodData[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PeriodData[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.financeInfos = result;
    }, error => console.error(error));
  }
  ngOnInit(): void {
  }

}



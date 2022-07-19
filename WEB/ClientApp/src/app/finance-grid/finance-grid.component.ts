import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { financeStateService } from "../finance-state.service";
import { WebConstsService } from '../web-consts.service';

@Component({
  selector: 'app-finance-grid',
  templateUrl: './finance-grid.component.html',
  styleUrls: ['./finance-grid.component.css']
})

export class FinanceGridComponent implements OnInit {
  public financeInfos: PeriodData[];
  private baseUrl: string;

  constructor(private http: HttpClient, 
    private constService: WebConstsService) {
    this.financeInfos = new Array();
  }

  ngOnInit(): void {
  }

  reloadTable():void{
    this.http.get<PeriodData[]>(this.constService.PeriodData)
    .subscribe(result => {
      this.financeInfos = result;
    }, error => console.error(error));
  }

}

interface PeriodData
{
    FirstPrice:number;
    LastPrice:number;
    MaxPrice:number;
    MinPrice:number;
    Sum:number;
    Time:Date;
}


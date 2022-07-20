import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { financeStateService } from "../../services/finance-state.service";
import { WebConstsService } from '../../services/web-consts.service';

@Component({
  selector: 'app-finance-grid',
  templateUrl: './finance-grid.component.html',
  styleUrls: ['./finance-grid.component.css']
})

export class FinanceGridComponent implements OnInit {
  public financeInfos: PeriodData[];
  public financeInfosSource: PeriodData[];
  public sortReverse: boolean;
  public sortType:string;
  private baseUrl: string;

  constructor(
    private http: HttpClient, 
    private constService: WebConstsService,
    private financeStateService : financeStateService
    ) {
    this.financeInfos = new Array();
  }

  ngOnInit(): void {
    this.financeStateService.currentStageMessage.subscribe((с)=> this.reloadTable())
  }

  reloadTable():void{
    //var path = this.constService.PeriodData+'/'+1000 * 60;
    var path = "https://62d7448551e6e8f06f1a946d.mockapi.io/api/v1/griddata";
    this.http.get<PeriodData[]>(path)
    .subscribe(result => {
      this.financeInfos = result;
      this.financeInfosSource = result;
    }, error => console.error(error));
  }
  
  applyFilter(filterValue:string){
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.financeInfos = this.financeInfosSource;
    } else {
       this.financeInfos = this.financeInfosSource.filter((item) => 
                        item.FirstPrice.toString().includes(filterValueLower) || 
                        item.LastPrice.toString().includes(filterValueLower) || 
                        item.MaxPrice.toString().includes(filterValueLower) || 
                        item.MaxPrice.toString().includes(filterValueLower) || 
                        item.Time.toString().includes(filterValueLower) || 
                        item.Sum.toString().includes(filterValueLower));
    }
  }

  onSort(column:string){
    this.sortReverse = !this.sortReverse;
    this.sortType = column;
    this.sortByColumn(this.financeInfos, column, this.sortReverse ? 'desc' : 'asc');
  }

   sortByColumn(list: any[] | undefined, column:string, direction = 'desc'): any[] {
      let sortedArray = (list || []).sort((a,b)=>{
        if(a[column] > b[column]){
          return (direction === 'desc') ? 1 : -1;
        }
        if(a[column] < b[column]){
          return (direction === 'desc') ? -1 : 1;
        }
        return 0;
      })
    return sortedArray;
   }


}

interface PeriodData
{
    Id:number;
    FirstPrice:number;
    LastPrice:number;
    MaxPrice:number;
    MinPrice:number;
    Sum:number;
    Time:Date;
}


import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    this.sortReverse = true;
  }

  ngOnInit(): void {
    this.financeStateService.currentStageMessage.subscribe((с)=> this.reloadTable())
  }

  reloadTable():void{
    
    const millisecondsInterval= 1000 * 60;
    const path = `${this.constService.PeriodData}/${millisecondsInterval}`;
    //var path = "https://62d7448551e6e8f06f1a946d.mockapi.io/api/v1/griddata";
    this.http.get<PeriodData[]>(path)
    .subscribe(result => {
      this.financeInfos = result;
      this.financeInfosSource = result;
      this.onSort('time');
    }, error => console.error(error));
  }
  
  applyFilter(filterValue:string){
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.financeInfos = this.financeInfosSource;
    } else {
       this.financeInfos = this.financeInfosSource.filter((item) => 
                        item.firstPrice.toString().includes(filterValueLower) || 
                        item.lastPrice.toString().includes(filterValueLower) || 
                        item.maxPrice.toString().includes(filterValueLower) || 
                        item.maxPrice.toString().includes(filterValueLower) || 
                        item.time.toString().includes(filterValueLower) || 
                        item.sum.toString().includes(filterValueLower));
    }
  }

  onSort(column:string){
    this.sortType = column;
    this.financeInfos = this.sortByColumn(this.financeInfos, column, this.sortReverse ? 'desc' : 'asc');
    this.sortReverse = !this.sortReverse;
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
    rowNumb:number;
    firstPrice:number;
    lastPrice:number;
    maxPrice:number;
    minPrice:number;
    sum:number;
    time:Date;
}


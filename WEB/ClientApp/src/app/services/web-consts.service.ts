import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebConstsService {
  public LocalBaseHost:string ="https://localhost:44314/";
  public PeriodData:string = this.LocalBaseHost  + "api/v1/finance/periodData";
  public  Csv:string = this.LocalBaseHost + "api/v1/finance/csv";

  constructor( @Inject('BASE_URL') private baseUrl: string) {
  }
}

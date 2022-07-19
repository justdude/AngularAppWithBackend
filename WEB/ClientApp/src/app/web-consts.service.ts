import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebConstsService {
  public RootPath:string = "/api/v1/finance";
  public PeriodData:string =  this.baseUrl + this.RootPath + "periodData";
  public  Csv:string = this.baseUrl + this.RootPath + "csv";

  constructor( @Inject('BASE_URL') private baseUrl: string) {
    this.baseUrl = baseUrl;
  }


}

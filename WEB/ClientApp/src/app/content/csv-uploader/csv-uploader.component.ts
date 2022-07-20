import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { financeStateService } from "../../services/finance-state.service";
import { WebConstsService } from '../../services/web-consts.service';


@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.css']
})
export class CsvUploaderComponent implements OnInit {
  isloading : boolean;
  fileToUpload: File | null = null;

  constructor(private http: HttpClient, 
              private constService: WebConstsService,
              private financeStateService : financeStateService) {}

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    if (files.length <=0 ){
      this.raiseRefresh(false);
      return;
    }

    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.isloading = true;
    this.postFile(this.fileToUpload).subscribe(data => {
      this.isloading = false;
      }, error => {
        console.log(error);
      });
  }

  raiseRefresh(successful:boolean){
    console.log(`updated `);
    this.financeStateService.updateState(successful);
  }

  postFile(fileToUpload: File){
    const formData = new FormData();
    formData.append("thumbnail", fileToUpload);
    
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': '*' ,
        'Accept': 'application/json'})
    };
    
    return this.http
      .post(this.constService.Csv, formData, httpOptions)
      .pipe(
        tap(_ => this.raiseRefresh(true)),
        tap(_ => this.raiseRefresh(false))
      );
  }

}

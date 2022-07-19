import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { financeStateService } from "../finance-state.service";
import { WebConstsService } from '../web-consts.service';


@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.css']
})
export class CsvUploaderComponent implements OnInit {
  isloading : boolean;
  fileToUpload: File | null = null;

  constructor(private http: HttpClient, 
              private constService: WebConstsService) {}

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
    console.log("uploadFileToActivity");
    this.postFile(this.fileToUpload).subscribe(data => {
      this.isloading = false;
      }, error => {
        console.log(error);
      });
  }

  raiseRefresh(successful:boolean){
    console.log(`updated `);
  }

  postFile(fileToUpload: File){
    // const formData: FormData = new FormData();
    // formData.append('fileKey', fileToUpload, fileToUpload.name);
    const req = new HttpRequest('POST', this.constService.Csv, fileToUpload, {
      reportProgress: false
    });

    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http
      .post(this.constService.Csv, fileToUpload, httpOptions)
      .pipe(
        tap(_ => this.raiseRefresh(true)),
        tap(_ => this.raiseRefresh(false))
      );
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.css']
})
export class CsvUploaderComponent implements OnInit {

  fileToUpload: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // uploadFileToActivity() {
  //   this.postFile(this.fileToUpload).subscribe(data => {
      
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // postFile(fileToUpload: File){
    
  //   const endpoint = 'ssddd/sss';

  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);

  //   return HttpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }

}

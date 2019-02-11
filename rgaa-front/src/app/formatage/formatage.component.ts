import {Component, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {FileUploader} from 'ng2-file-upload';
import {FormatageService} from './formatage.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-formatage',
  templateUrl: './formatage.component.html',
  styleUrls: ['./formatage.component.css']
})
export class FormatageComponent implements OnInit {

  uploadFileName: string;
  uploader: FileUploader = new FileUploader({url: URL});

  constructor(private paramService: ParameterService, private formatageService: FormatageService) {
  }

  ngOnInit() {
    this.uploadFileName = 'Pas de fichier';
    // this.uploader.onAfterAddingFile = (file) => {
    //   file.withCredentials = false;
    // };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //   console.log('ImageUpload:uploaded:', item, status, response);
    //   alert('File uploaded successfully');
    // };
  }

  changeSize(event): void {
    this.paramService.setFontSize(event);
  }

  changeFamily(event): void {
    this.paramService.setFontFamily();
  }

  get fontSizeParam(): number {
    return this.paramService.fontSize;
  }

  get fontFamilyParam(): boolean {
    return this.paramService.fontFamily;
  }

  fileSelected(e): void {
    this.uploadFileName = String(this.uploader.queue[0].file.name);
  }

  display(): void {
    console.log(this.uploader);
    if (this.uploader.queue.length !== 0) {
      this.uploader.uploadItem(this.uploader.queue[0]);
    }
    console.log(this.formatageService.getFile(this.uploader.queue[0].file.name));
  }

}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  @Output() imageUploaded = new EventEmitter<File>();

  constructor() { }

  onImageSelected(event: any): void {
    if (event.target.files[0])
      this.imageUploaded.emit(event.target.files[0]);
  }
}

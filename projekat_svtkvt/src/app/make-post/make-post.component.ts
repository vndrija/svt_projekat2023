import { Component } from '@angular/core';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css'],
})
export class MakePostComponent {
  selectedImageFile: File;
  constructor() {
    this.selectedImageFile = null as any;
  }
  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files![0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener('loadend', (ev) => {
      let readbleString = fileReader.result?.toString();
      let postPreviewImage = <HTMLImageElement>(
        document.getElementById('post-preview-image')
      );
      postPreviewImage.src = readbleString!;
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MakePostComponent } from '../make-post/make-post.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  constructor(private dialog: MatDialog) {}

  onCreatePostClick() {
    this.dialog.open(MakePostComponent);
  }
}

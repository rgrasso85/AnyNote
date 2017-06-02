import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNotePage } from './addnote';

@NgModule({
  declarations: [
    AddNotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNotePage),
  ],
  exports: [
    AddNotePage
  ]
})
export class AddNoteModule {}

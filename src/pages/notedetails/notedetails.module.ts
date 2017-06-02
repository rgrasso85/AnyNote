import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NoteDetailsPage} from './notedetails';

@NgModule({
  declarations: [
    NoteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteDetailsPage),
  ],
  exports: [
    NoteDetailsPage
  ]
})
export class NotedetailsModule {}

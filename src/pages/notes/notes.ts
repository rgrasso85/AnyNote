import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import {NoteDetailsPage} from "../notedetails/notedetails";
import {AddNotePage} from "../addnote/addnote";
import {NoteService} from "../../providers/note-service";
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Notes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public modalCtrl: ModalController, public noteCtrl: NoteService, public authCtrl: AuthService)
  {
    noteCtrl.getNotes();
  }

  ionViewDidLoad() {
    this.noteCtrl.getNotes();
  }

 addNoteModal(){
    let addModal = this.modalCtrl.create(AddNotePage);
    addModal.present();
}
  noteDetailsModal(note){
    let detailModal = this.modalCtrl.create(NoteDetailsPage, {note:note});
    detailModal.present();
  }
}

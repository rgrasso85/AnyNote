import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NoteService} from "../../providers/note-service";

/**
 * Generated class for the EditNote page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  note: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteCtrl: NoteService, public viewCtrl: ViewController) {
    this.note = navParams.get("note");
  }

  ionViewDidLoad() {
  }

  editNote(note,NoteTitle,NoteBody){
  this.noteCtrl.editNote(note,NoteTitle,NoteBody);
  this.viewCtrl.dismiss();
    }
}



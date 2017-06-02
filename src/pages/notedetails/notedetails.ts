///<reference path="../../../node_modules/@angular/http/src/http.d.ts"/>
import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {NoteService} from "../../providers/note-service";
import {EditNotePage} from "../edit-note/edit-note";

/**
 * Generated class for the Notedetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notedetails',
  templateUrl: 'notedetails.html',
})
export class NoteDetailsPage {
  note: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController, public notesCtrl: NoteService, public modalCtrl: ModalController) {
    this.note = navParams.get("note");
  }

  ionViewDidLoad() {
  }

  deleteNote(ID) {
  this.notesCtrl.deleteNote(ID);
  this.viewCtrl.dismiss();
  }

  editNoteModal(note) {
    this.viewCtrl.dismiss();
    let editModal = this.modalCtrl.create(EditNotePage, {note: note});
    editModal.present();

  }
}

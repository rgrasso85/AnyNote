import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NoteService} from "../../providers/note-service";

/**
 * Generated class for the Addnote page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddNotePage {[name: string]: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public notesCtrl: NoteService,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  addNote(NoteTitle,NoteBody){
    this.viewCtrl.dismiss();
    this.notesCtrl.saveNote(NoteTitle,NoteBody);
  }
}

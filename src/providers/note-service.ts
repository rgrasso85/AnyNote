import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth-service";

/*
  Generated class for the NoteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteService {
public notes: any[];
  constructor(public http: Http, public authCtrl: AuthService) {
  }
  getNotes(){
    this.http.get('http://localhost:60659/Api/Notes', this.notes).subscribe(
      response => {
        //console.log(response.json());
        this.notes = (response.json());
      },
      error => {
        console.log(error);
      }
    );
  }

  saveNote(NoteTitle,NoteBody){
    let note = {
      NoteTitle: NoteTitle,
      NoteBody: NoteBody,
      NoteOwner: this.authCtrl.userName
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Attempts to register the user to the database
    this.http.post('http://localhost:60659/api/Notes',note , headers)
      .subscribe(data => {
        //console.log("Worked!");
        this.getNotes();
      }, error => {
        console.log(error._body);// Error getting the data
      });
  }
  editNote(note,NoteTitle,NoteBody){
    let notes = {
      ID: note.ID,
      NoteTitle: NoteTitle,
      NoteBody: NoteBody,
      NoteOwner: note.NoteOwner
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = 'http://localhost:60659/api/Notes/' + notes.ID;
    this.http.put(url, notes, headers).subscribe(data => {
      //console.log(note);
      this.getNotes();
    }, error => {
      console.log(note);// Error getting the data
    });
  }
  deleteNote(ID) {
    let url = 'http://localhost:60659/api/Notes/' + ID;
    this.http.delete(url).subscribe(
      response => {
        //console.log(response.json());
        this.getNotes();
      },
      error => {
        console.log(error);
      }
    );
  }
}

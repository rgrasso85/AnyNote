import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {NotesPage} from "../notes/notes";
import {FriendsPage} from "../friends/friends";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotesPage;
  tab3Root = FriendsPage;

  constructor() {

  }
}

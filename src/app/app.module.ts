import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NotesPage} from "../pages/notes/notes";
import {FriendsPage} from "../pages/friends/friends";
import {NoteDetailsPage} from "../pages/notedetails/notedetails";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AddNotePage} from "../pages/addnote/addnote";
import {AuthService} from "../providers/auth-service";
import {NoteService} from "../providers/note-service";
import {EditNotePage} from "../pages/edit-note/edit-note";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NotesPage,
    FriendsPage,
    NoteDetailsPage,
    LoginPage,
    RegisterPage,
    AddNotePage,
    EditNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NotesPage,
    FriendsPage,
    NoteDetailsPage,
    LoginPage,
    RegisterPage,
    AddNotePage,
    EditNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

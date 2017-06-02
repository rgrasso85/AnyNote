import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service"

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private authCtrl: AuthService, public navCtrl: NavController,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
  }

  login (event,email,password){
    this.authCtrl.login(event,email,password);
    if (this.authCtrl.loggedIn = true)
    {
      this.viewCtrl.dismiss();
    }else console.log("Invalid Username/Password");
  }




}

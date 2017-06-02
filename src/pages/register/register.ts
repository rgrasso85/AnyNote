import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
              public authCtrl:AuthService,public viewCtrl:ViewController) { }

  ionViewDidLoad() {
  }

register(email,password,confirmpassword){
    this.authCtrl.register(email,password,confirmpassword);
    if(this.authCtrl.registerSuccess = true){
      this.viewCtrl.dismiss();
    } else console.log("Unable to register!");
}
}

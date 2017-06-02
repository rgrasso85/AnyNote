import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AuthService} from "../../providers/auth-service"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public authCtrl:AuthService) {

  }

  loginPage(){
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  registerPage(){
    let registerModal = this.modalCtrl.create(RegisterPage);
    registerModal.present();
  }

}

import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  public userName: any;
  public loggedIn: boolean;
  public registerSuccess : boolean;
  constructor(public http: Http, public toastCtrl: ToastController) {
  }
  login(event, email, password) {
    event.preventDefault();
    let url = 'http://localhost:60659/token';
    let body = "UserName=" + email + "&Password=" + password + "&grant_type=password";
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options: RequestOptions;
    options = new RequestOptions({headers: headers});

    this.http.post(url, body, options).subscribe(
      response => {
        console.log(response.json());
        this.userName = email;
        this.loginToast();
        this.isLoggedIn();
        console.log(this.loggedIn)

      },
      error => {
        alert(error);
        console.log(error);
      });

      return this.userName;
  }

  register(email,password,confirmPassword){
    //Creates a JSON formatted variable from the Form
    let userInfo = {
      Email:email,
      Password:password,
      ConfirmPassword:confirmPassword
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //Attempts to register the user to the database
    this.http.post('http://localhost:60659/api/Account/Register',userInfo, {headers:headers})
      .subscribe(data => {
        //console.log("Worked!");
        this.registerToast();
        return this.registerSuccess = true;
      }, error => {
        console.log(error._body);
        return this.registerSuccess = false;// Error getting the data
      });
  }
  //Displays a Toast to confirm registration
  registerToast() {
    let toast = this.toastCtrl.create({
      message: 'Thank you for registering!',
      duration: 3000
    });
    toast.present();
  }

  loginToast(){
    let toast = this.toastCtrl.create({
      message: "Welcome to AnyNote!",
      duration: 3000
    });
    toast.present();
  }

  isLoggedIn(){
    return this.loggedIn = true;
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../share/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { login_model } from '../../share/login_model';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {
    public responseData: any;
    public userData: login_model = new login_model();


    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public toastCtrl: ToastController) {

    }

    public iniciarSesion() {
        if (this.userData.rfc && this.userData.password) {
            this.authService.authUser(this.userData, 'login_ctrl/autenticateUser').subscribe(
                (result) => {
                    this.responseData = result['response'];
                    if (this.responseData) {
                        localStorage.setItem('userData', JSON.stringify(this.responseData));
                        this.navCtrl.push(WelcomePage);
                    }
                    else {
                        this.presentToast("Give valid details");
                    }
                }, (err) => {
                    console.log("Error en el servidor, verifique si tienes internet", err);
                });
        } else {
            this.presentToast("Give valid details");
        }
    }
    public presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

}
  /*
  public iniciarSesionn(){

      if(this.userData.rfc && this.userData.password){
          this.authService.authUser(this.userData, 'login_ctrl/autenticateUser')
              .then((result) => {
              this.responseData = result;
              if(this.responseData.userData){
                  console.log(this.responseData);
                  localStorage.setItem('userData', JSON.stringify(this.responseData));
                  this.navCtrl.push(WelcomePage, {}, {animate: false});
              }else{
                  console.log("User already exists");
                  this.presentToast("Give valid details");
              }
          }else{
                  this.presentToast("Give valid details");
          }
          }, (err) => {
                console.log("Error en el servidor verifique si tienes internet", err);
          });
  }*/



import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { AuthService } from '../../share/auth-service';
//import { response_login_model } from '../../share/response_login_model';
// import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public userDetails: any;  //datos que se guardador en el localStorage
  userPostData = { "id_user_sistem": "", "token": "" };
  public nombre: string;
  public rfc: string;
  constructor(public navCtrl: NavController, public app: App, public authService: AuthService) {

    const data = JSON.parse(localStorage.getItem('userData'));

    if (data != null && data != undefined) {
      this.userDetails = data;
      for (var i = 0; i < this.userDetails.length; i++) {
        this.userPostData.id_user_sistem = this.userDetails[i].id_user_sistem;
        this.userPostData.token = this.userDetails[i].token;
        this.nombre = this.userDetails[i].nombre;
        this.rfc = this.userDetails[i].rfc;

      }
    } else {
      console.log("estas haciendo todo mal");
    }
  }

  ionViewDidLoad() {
    //console.log('cosas que se pueden cargar despues de ejecutar la vista WelcomePage');
  }

  /*public getFeed() {
    this.authService.authUser(this.userPostData, 'feed')
        .subscribe((result) => {
          this.responseData = result;
          if (this.responseData.feedData) {
            this.dataSet = this.responseData.feedData;
          } else {}
        }, (err) => {
            console.log("hay un erro: ", err);
        });
  }*/

  public backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  public logout() {
    // Remove API token
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}

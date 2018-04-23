import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService } from '../../share/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    userDetails: any;
    responseData: any;

    userPostData = {"id_user_sistem":"","token":""};

  constructor(public navCtrl: NavController, public authService:AuthService,  public app: App) {
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;

      this.userPostData.id_user_sistem = this.userDetails.id_user_sistem;
      this.userPostData.token = this.userDetails.token;
  }
  public backToWelcome(){
        const root = this.app.getRootNav();
        root.popToRoot();
  }
  public logout(){
       localStorage.clear();
       setTimeout(() => this.backToWelcome(), 1000);
  }

}

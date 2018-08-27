import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeparadoPage} from'../separado/separado';
import {ObjetoPage} from '../objeto/objeto';

/**
 * Generated class for the SifuncionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sifunciona',
  templateUrl: 'sifunciona.html',
})
export class SifuncionaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SifuncionaPage');
  }


numero1;
numero2;

 separado(){
      
     this.navCtrl.push(SeparadoPage,{numero1: this.numero1, numero2: this.numero2});
      
      
      
  }

  objeto(){
      
      this.navCtrl.push(ObjetoPage, {todo:{numero1: this.numero1, numero2: this.numero2}});
      
      
  }



}

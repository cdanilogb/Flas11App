import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeparadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-separado',
  templateUrl: 'separado.html',
})
export class SeparadoPage {

numero1;
numero2;
 resultado: number;
 resultado2: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      this.numero1 = parseFloat(this.navParams.get("numero1"));
      this.numero2 = parseFloat(this.navParams.get("numero2"));
      this.resultado = this.numero1 + this.numero2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeparadoPage');
  }
  
  suma(){
      
   this.resultado2 = this.numero1 + this.numero2;
      
  }

}

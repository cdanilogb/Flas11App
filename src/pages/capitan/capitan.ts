import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CapitanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capitan',
  templateUrl: 'capitan.html',
})
export class CapitanPage {

    numero1;
    numero2;
    resultado;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanPage');
  }
  
    suma(){
        
        this.resultado = "La sumas de " + this.numero1 + " + " + 
            this.numero2 + " = " + (parseFloat(this.numero1) + parseFloat(this.numero2)); 
        
    }
    


}

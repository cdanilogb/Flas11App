import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';

/**
 * Generated class for the ListpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {HomePage} from '../home/home';
@IonicPage()
@Component({
  selector: 'page-listperson',
  templateUrl: 'listperson.html',
})
export class ListpersonPage {
    
    numero;

    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConectarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpersonPage');
  }
  
  irHome(){
    
      this.navCtrl.setRoot(HomePage);
}

  consultar(){
      
      let estado = this.acceso.traerListPerson(this.numero);
      estado.subscribe(data=>{
       
          console.log(data);
      },err=>{
          console.log(err);
      });
  }

}

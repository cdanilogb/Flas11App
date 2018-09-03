import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';

/**
 * Generated class for the BusperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busper',
  templateUrl: 'busper.html',
})
export class BusperPage {

filtro:any =1;
criterio="";
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public toastCtrl: ToastController,
      private conecta: ConectarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusperPage');
  }
  
  presentToast(Mensaje) {
    const toast = this.toastCtrl.create({
      message: Mensaje,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'ok',
      duration: 4000
    });
    toast.present();
  }
  
  buscar(){
      
      if (this.filtro != 1 && this.criterio == ""){
          this.presentToast("La opcion de filtro no puede estar vacia");
      }else{
          let busqueda = {filtro: this.filtro, criterio: this.criterio };
          let estado = this.conecta.servidorBuscar(busqueda);
          estado.subscribe(data=>{
              console.log(data);
          },err=>{
              console.log(err);
          });
         
      }
  }
    verifique(){
        this.criterio="";
        this.presentToast("Cambio el criterio");
    }
}

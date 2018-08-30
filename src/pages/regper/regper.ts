import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController } from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regper',
  templateUrl: 'regper.html',
})
export class RegperPage {


    miventana: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private CosValFor: FormBuilder,
        public loading: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        
        this.iniciarFormulario();
  }

    RegPersona: FormGroup;
    
    iniciarFormulario(){
        
        this.RegPersona = this.CosValFor.group({
            
            tipo:['',[Validators.required]],
            numero: ['', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ üÜñÑ]{2,30}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ üÜñÑ]{2,30}$/)]],
            telefono: ['', [Validators.required, Validators.pattern(/^[+0-9]{7,15}$/)]],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
            fecNac: ['', [Validators.required]]
            
        });
    }
    
     regPer(){
         this.miventana = this.loading.create({
             
             content: "Un momento... <br>Se esta procesando su solicitud "
         });
         
         this.miventana.present();
         
         let estado = this.conecta.enviarAlServidor(this.RegPersona.value);
         
         estado.subscribe(data=>{
             
             
         },
         err=>{
             this.miventana.dismiss();
             this.presentAlert("Error #6","No existe conexion con el servidor, Verifique la conexión");
         }
         
         );
      
      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegperPage');
  }
 presentAlert(estTitu,estMensaje) {
  let alert = this.alertCtrl.create({
    title: estTitu,
    subTitle: estMensaje,
    buttons: ['Cerrar']
  });
  alert.present();
}

}

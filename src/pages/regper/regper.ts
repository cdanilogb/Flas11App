import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private CosValFor: FormBuilder) {
        
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
            email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]]
            
        });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegperPage');
  }
  regPer(){
      
      console.table(this.RegPersona.value);
      
  }

}

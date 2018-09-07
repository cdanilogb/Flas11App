import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
/**
 * Generated class for the ActuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-actuper',
    templateUrl: 'actuper.html',
})
export class ActuperPage {
    persona;
    constructor(public navCtrl: NavController, public navParams: NavParams, private CosValFor: FormBuilder,
        public VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        this.persona = this.navParams.get("Data");
        this.iniciarFormulario();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActuperPage');
    }
    RegPersona: FormGroup;

    iniciarFormulario() {

        this.RegPersona = this.CosValFor.group({

            tipo: [this.persona.tipo, [Validators.required]],
            numero: [this.persona.cc, [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: [this.persona.nombre, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ üÜñÑ]{2,30}$/)]],
            apellido: [this.persona.apellido, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ üÜñÑ]{2,30}$/)]],
            telefono: [this.persona.telefono, [Validators.required, Validators.pattern(/^[+0-9]{7,15}$/)]],
            email: [this.persona.email, [Validators.required, Validators.email, Validators.maxLength(30)]],
            fecNac: [this.persona.fechaNa, [Validators.required]]

        });
    }

    ActualizarPer() {
        const loader = this.VentanaEspera.create({
            content: "Un momento por favor.... Se esta procesando su solicitud"
        });
        loader.present();
        let perLocal = this.RegPersona.value;
        perLocal.id = this.persona.id;
        let estado = this.conecta.servidorActualizar(perLocal);

        estado.subscribe(data => {
            loader.dismiss();
            let respuesta: any = data;
            if (respuesta.success == "ok") {
                this.showAlert("Informe", "Se actualizo el registro con éxito");
            } else {
                this.showAlert("Informe", "No se actualizo el registro");
            }

        }, err => {
            console.log(err);
            loader.dismiss();
            this.showAlert("Error #8", "No hay conexión con el servidor");

        });
    }


    showAlert(titulo, mensaje) {
        const alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }




}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
    numero3;
    resultado;
    tablam;
    Estado;
    ctrl: boolean = true;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CapitanPage');
    }

    suma() {

        this.resultado = "La suma de " + this.numero1 + " + " +
            this.numero2 + " = " + (parseFloat(this.numero1) + parseFloat(this.numero2));

    }

    resta() {

        this.resultado = "La resta de " + this.numero1 + " - " +
            this.numero2 + " = " + (parseFloat(this.numero1) - parseFloat(this.numero2));

    }

    multiplicacion() {

        this.resultado = "La multi de " + this.numero1 + " * " +
            this.numero2 + " = " + (parseFloat(this.numero1) * parseFloat(this.numero2));

    }

    division() {

        this.resultado = "La division de " + this.numero1 + " / " +
            this.numero2 + " = " + (parseFloat(this.numero1) / parseFloat(this.numero2));

    }

    tabla() {
        this.Estado = true;
        this.tablam = Array();
        for (let i = 1; i <= this.numero2; i++) {
            if (((this.numero1 * i) % this.numero3 == 0) == this.ctrl) {
                this.tablam.push({num: this.numero1, ind: i, res: (this.numero1 * i)});

            }
        }



    }
    cambio(valor) {
        this.ctrl = valor;
        this.tabla();


    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objeto',
  templateUrl: 'objeto.html',
})
export class ObjetoPage {

todo:any;
resultado:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      
      this.todo=this.navParams.get("todo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjetoPage');
    this.resultado = parseFloat(this.todo.numero1) + parseFloat(this.todo.numero2);
  }

}

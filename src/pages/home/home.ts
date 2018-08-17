import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SnorlaxPage} from '../snorlax/snorlax';
import {CapitanPage} from '../capitan/capitan';
import {MoneyPage} from '../money/money';
import {AndroidPage} from '../android/android';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irSnorlax (){
      
      this.navCtrl.push(SnorlaxPage);
      
      
  }
  irCapitan(){
      
      this.navCtrl.setRoot(CapitanPage);
  }
  irMoney(){
      
      
      this.navCtrl.push(MoneyPage);
  }


irAndroid(){
    
    this.navCtrl.push(AndroidPage);
}
}

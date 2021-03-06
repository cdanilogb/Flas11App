import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SnorlaxPage} from '../snorlax/snorlax';
import {CapitanPage} from '../capitan/capitan';
import {MoneyPage} from '../money/money';
import {AndroidPage} from '../android/android';
import {ListpersonPage} from '../listperson/listperson';
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegperPage} from '../regper/regper';
import {BusperPage} from '../busper/busper';

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

irListperson(){
    
    this.navCtrl.push(ListpersonPage);
}
irSiFunciona(){
    
    
    this.navCtrl.push(SifuncionaPage);
}

irRegper(){
    
    
    this.navCtrl.push(RegperPage);
} 
irBusper(){
    
    
    this.navCtrl.push(BusperPage);
} 


}

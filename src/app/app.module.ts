import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SnorlaxPage} from '../pages/snorlax/snorlax';
import {CapitanPage} from '../pages/capitan/capitan';
import {MoneyPage} from '../pages/money/money';
import {AndroidPage} from '../pages/android/android';
import {ListpersonPage} from '../pages/listperson/listperson';
import {HttpClientModule} from '@angular/common/http';
import {VerperfilPage} from '../pages/verperfil/verperfil';
import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {SeparadoPage} from '../pages/separado/separado';
import {ObjetoPage} from '../pages/objeto/objeto';
import {RegperPage} from '../pages/regper/regper';

import { ConectarProvider } from '../providers/conectar/conectar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SnorlaxPage,
    CapitanPage,
    MoneyPage,
    AndroidPage,
    ListpersonPage,
    VerperfilPage,
    SifuncionaPage,
    SeparadoPage,
    ObjetoPage,
    RegperPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SnorlaxPage,
    CapitanPage,
    MoneyPage,
    AndroidPage,
    ListpersonPage,
    VerperfilPage,
    SifuncionaPage,
      SeparadoPage,
      ObjetoPage,
      RegperPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConectarProvider
  ]
})
export class AppModule {}

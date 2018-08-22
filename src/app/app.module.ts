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

import { ConectarProvider } from '../providers/conectar/conectar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SnorlaxPage,
    CapitanPage,
    MoneyPage,
    AndroidPage,
    ListpersonPage
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
    ListpersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConectarProvider
  ]
})
export class AppModule {}

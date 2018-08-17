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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SnorlaxPage,
    CapitanPage,
    MoneyPage,
    AndroidPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SnorlaxPage,
    CapitanPage,
    MoneyPage,
    AndroidPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

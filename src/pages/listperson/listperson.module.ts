import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListpersonPage } from './listperson';

@NgModule({
  declarations: [
    ListpersonPage,
  ],
  imports: [
    IonicPageModule.forChild(ListpersonPage),
  ],
})
export class ListpersonPageModule {}

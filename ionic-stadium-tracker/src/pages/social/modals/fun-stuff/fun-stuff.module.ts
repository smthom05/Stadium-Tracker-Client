import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunStuffPage } from './fun-stuff';

@NgModule({
  declarations: [
    FunStuffPage,
  ],
  imports: [
    IonicPageModule.forChild(FunStuffPage),
  ],
})
export class FunStuffPageModule {}

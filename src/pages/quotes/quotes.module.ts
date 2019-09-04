import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryQuotesPage } from './quotes';

@NgModule({
  declarations: [
    CategoryQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryQuotesPage),
  ],
})
export class QuotesPageModule {}

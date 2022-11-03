import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegioesPageRoutingModule } from './regioes-routing.module';

import { RegioesPage } from './regioes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegioesPageRoutingModule
  ],
  declarations: [RegioesPage]
})
export class RegioesPageModule {}

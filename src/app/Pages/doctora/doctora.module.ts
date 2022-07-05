import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctoraRoutingModule } from './doctora-routing.module';
import { DoctoraComponent } from './doctora.component';
import { SidbarComponent } from 'src/app/Components/DoctoraComponent/sidbar/sidbar.component';
import { TablacitasComponent } from 'src/app/Components/DoctoraComponent/tablacitas/tablacitas.component';


@NgModule({
  declarations: [
    DoctoraComponent,
    SidbarComponent,
    TablacitasComponent
  ],
  imports: [
    CommonModule,
    DoctoraRoutingModule
  ]
})
export class DoctoraModule { }

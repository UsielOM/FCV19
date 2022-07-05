import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctoraRoutingModule } from './doctora-routing.module';
import { DoctoraComponent } from './doctora.component';


@NgModule({
  declarations: [
    DoctoraComponent
  ],
  imports: [
    CommonModule,
    DoctoraRoutingModule
  ]
})
export class DoctoraModule { }

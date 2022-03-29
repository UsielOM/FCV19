import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepagesComponent } from './homepages.component';
import { LoginComponent } from 'src/app/Components/HomeComponent/login/login.component';


@NgModule({
  declarations: [
    HomepagesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepagesComponent } from './homepages.component';
import { LoginComponent } from 'src/app/Components/HomeComponent/login/login.component';
import { RegistroComponent } from 'src/app/Components/HomeComponent/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomepagesComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
   
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }

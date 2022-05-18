import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserBegingPageComponent } from './user-beging-page.component';
import { NavbarUserComponent } from 'src/app/Components/UserComponent/navbar-user/navbar-user.component';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { PerfiluserComponent } from 'src/app/Components/UserComponent/perfiluser/perfiluser.component';
import { EncuestabasicaComponent } from 'src/app/Components/UserComponent/encuestabasica/encuestabasica.component';
import { SignosVitalesComponent } from 'src/app/Components/UserComponent/signos-vitales/signos-vitales.component';


@NgModule({
  declarations: [

    
    NavbarUserComponent,
    SidbarUserComponent,
    PerfiluserComponent,
    EncuestabasicaComponent,
    SignosVitalesComponent,
    UserBegingPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

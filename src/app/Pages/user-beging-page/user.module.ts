import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserBegingPageComponent } from './user-beging-page.component';
import { NavbarUserComponent } from 'src/app/Components/UserComponent/navbar-user/navbar-user.component';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { PerfiluserComponent } from 'src/app/Components/UserComponent/perfiluser/perfiluser.component';
import { EncuestabasicaComponent } from 'src/app/Components/UserComponent/encuestabasica/encuestabasica.component';


@NgModule({
  declarations: [

    UserBegingPageComponent,
    NavbarUserComponent,
    SidbarUserComponent,
    PerfiluserComponent,
    EncuestabasicaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

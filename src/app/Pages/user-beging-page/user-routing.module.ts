import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestabasicaComponent } from 'src/app/Components/UserComponent/encuestabasica/encuestabasica.component';
import { PerfiluserComponent } from 'src/app/Components/UserComponent/perfiluser/perfiluser.component';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { SignosVitalesComponent } from 'src/app/Components/UserComponent/signos-vitales/signos-vitales.component';
import { UserBegingPageComponent } from './user-beging-page.component';
import { AuthGuardService } from '../../guards/auth-guard.service';

const routes: Routes = [
{path: 'User', component:UserBegingPageComponent, canActivate: [AuthGuardService],
children: [
  {path: '', component: SidbarUserComponent,canActivate: [AuthGuardService]},
  {path: 'perfil',component:PerfiluserComponent, canActivate: [AuthGuardService]},
  {path: 'encuesta', component:EncuestabasicaComponent, canActivate: [AuthGuardService]},
  {path: 'signos', component:SignosVitalesComponent, canActivate: [AuthGuardService]}
  
 
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

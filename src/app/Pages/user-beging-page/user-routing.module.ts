import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestabasicaComponent } from 'src/app/Components/UserComponent/encuestabasica/encuestabasica.component';
import { PerfiluserComponent } from 'src/app/Components/UserComponent/perfiluser/perfiluser.component';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { SignosVitalesComponent } from 'src/app/Components/UserComponent/signos-vitales/signos-vitales.component';
import { UserBegingPageComponent } from './user-beging-page.component';

const routes: Routes = [
{path: 'User', component:UserBegingPageComponent,
children: [
  {path: '', component: SidbarUserComponent},
  {path: 'perfil',component:PerfiluserComponent},
  {path: 'encuesta', component:EncuestabasicaComponent},
  {path: 'signos', component:SignosVitalesComponent}
  
 
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestabasicaComponent } from 'src/app/Components/UserComponent/encuestabasica/encuestabasica.component';
import { PerfiluserComponent } from 'src/app/Components/UserComponent/perfiluser/perfiluser.component';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { UserBegingPageComponent } from './user-beging-page.component';

const routes: Routes = [
{path: 'user', component:UserBegingPageComponent,
children: [
  {path: 'inicio', component:SidbarUserComponent},
  {path: 'perfil',component:PerfiluserComponent},
  {path: 'encuesta', component:EncuestabasicaComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

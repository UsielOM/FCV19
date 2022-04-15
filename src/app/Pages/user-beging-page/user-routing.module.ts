import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { UserBegingPageComponent } from './user-beging-page.component';

const routes: Routes = [
{path: '', component:UserBegingPageComponent,

children: [
  {path: 'sidvar_user', component:SidbarUserComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

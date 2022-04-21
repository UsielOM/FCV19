import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbarUserComponent } from 'src/app/Components/UserComponent/sidbar-user/sidbar-user.component';
import { UserBegingPageComponent } from './user-beging-page.component';

const routes: Routes = [
{path: 'user/inicio', component:UserBegingPageComponent,

children: [
  {path: '', component:SidbarUserComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

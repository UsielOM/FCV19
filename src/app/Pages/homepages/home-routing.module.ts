import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from 'src/app/Components/HomeComponent/registro/registro.component';
import { UserBegingPageComponent } from '../user-beging-page/user-beging-page.component';

const routes: Routes = [
  {path: "registro", component:RegistroComponent},
  {path: 'user', component:UserBegingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

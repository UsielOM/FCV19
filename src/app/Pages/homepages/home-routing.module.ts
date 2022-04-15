import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Components/HomeComponent/login/login.component';
import { RegistroComponent } from 'src/app/Components/HomeComponent/registro/registro.component';
import { UserBegingPageComponent } from '../user-beging-page/user-beging-page.component';
import { HomepagesComponent } from './homepages.component';

const routes: Routes = [

  {path: '', component:HomepagesComponent,
children:[ 
  
   {path: '', component:LoginComponent},

  {path: "registro", component:RegistroComponent},

   {path: 'user', component:UserBegingPageComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

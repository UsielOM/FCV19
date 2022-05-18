import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Shared/error/error.component';

const routes: Routes = [

  {path:'home',
loadChildren:() => import('./Pages/homepages/home.module').then(m => m.HomeModule)
},
{path: 'User',
loadChildren:() => import('./Pages/user-beging-page/user.module').then(m => m.UserModule)
},
{path:'404', component:ErrorComponent},
   {path: '**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

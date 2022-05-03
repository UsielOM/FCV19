import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'home',
loadChildren:() => import('./Pages/homepages/home.module').then(m => m.HomeModule)
},
{path: 'user',
loadChildren:() => import('./Pages/user-beging-page/user.module').then(m => m.UserModule)
},
  // {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

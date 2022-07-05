import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbarComponent } from '../../Components/DoctoraComponent/sidbar/sidbar.component';

const routes: Routes = [{path: '', children:[
  {path:'Doctora', component:SidbarComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctoraRoutingModule { }

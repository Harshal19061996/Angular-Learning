import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from '../app/hello-world/hello-world.component'
import { InterpolationComponent } from '../app/interpolation/interpolation.component'

const routes: Routes = [
  {path:'FirstApp',component:HelloWorldComponent},
  {path:'Interpolation',component:InterpolationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

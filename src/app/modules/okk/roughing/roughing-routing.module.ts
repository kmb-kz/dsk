import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RoughingComponent } from './components/roughing/roughing.component';

const routes: Routes = [{
  path: ':id',
  component: RoughingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoughingRoutingModule { }

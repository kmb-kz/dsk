import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AreasComponent } from './components/areas/areas.component';
import { PartComponent } from './components/part/part.component';
import { AreaComponent } from './components/area/area.component';

const routes: Routes = [
  {
    path: ':module',
    component: IndexComponent,
    children:[
      {
        path: '',
        component: AreasComponent
      },
      {
        path: ':id',
        component: AreaComponent
      },
      {
        path: 'part/:id',
        component: PartComponent
      }]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }

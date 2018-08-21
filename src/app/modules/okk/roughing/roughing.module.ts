import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoughingRoutingModule } from './roughing-routing.module';
import { IndexComponent } from './components/index/index.component';
import { RoughingState } from './roughing.state';
import { FilterComponent } from './components/roughing/filter/filter.component';
import { StandardsComponent } from './components/roughing/standards/standards.component';
import { ConstructivesComponent } from './components/roughing/constructives/constructives.component';
import { ConstructiveComponent } from './components/roughing/constructives/constructive/constructive.component';
import { RoughingService } from './services/roughing.service';
import { StandardComponent } from './components/roughing/standards/standard/standard.component';
import { ParameterComponent } from './components/roughing/standards/standard/parameter/parameter.component';
import { RoughingComponent } from './components/roughing/roughing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoughingRoutingModule
  ],
  declarations: [IndexComponent, FilterComponent, StandardsComponent,
    ConstructivesComponent, ConstructiveComponent, StandardComponent, ParameterComponent, RoughingComponent],
  providers: [RoughingState, RoughingService]
})
export class RoughingModule { }

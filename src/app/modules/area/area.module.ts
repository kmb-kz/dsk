import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { IndexComponent } from './components/index/index.component';
import { PartComponent } from './components/part/part.component';
import { AreasComponent } from './components/areas/areas.component';
import { AreaComponent } from './components/area/area.component';
import { AreaService } from './services/area.service';
import { AreaPartService } from './services/area-part.service';
import { AreaState } from './area.state';
import { AddPartComponent } from './components/common/add-part/add-part.component';
import { AreaItemComponent } from './components/areas/area-item/area-item.component';
import { FormsModule } from '@angular/forms';
import { ModuleButtonsComponent } from './components/common/module-buttons/module-buttons.component';
import { StatsComponent } from './components/areas/area-item/stats/stats.component';
import { EditPartComponent } from './components/common/edit-part/edit-part.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    AreaRoutingModule
  ],
  declarations: [IndexComponent, PartComponent, AreaComponent, 
    AreasComponent, AddPartComponent, AreaItemComponent, 
    ModuleButtonsComponent, StatsComponent,EditPartComponent],
  providers: [AreaState, AreaService, AreaPartService]
})
export class AreaModule { }

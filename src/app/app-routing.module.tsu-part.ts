import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TsuComponent } from './pages/tsu/tsu.component';
import { TsuIndexComponent } from './pages/tsu/tsu-index/tsu-index.component';
import { TsuAreasComponent } from './pages/tsu/tsu-areas/tsu-areas.component';
import { TsuAreaComponent } from './pages/tsu/tsu-area/tsu-area.component';
import { TsuAreaPartsComponent } from './pages/tsu/tsu-area-parts/tsu-area-parts.component';
import { TsuAreaPartComponent } from './pages/tsu/tsu-area-part/tsu-area-part.component';
import { TsuPartChildrenComponent } from './pages/tsu/tsu-part-children/tsu-part-children.component';

let TsuRoutes = {
		path: 'tsu', component: TsuComponent, canActivate: [AuthGuard], data: { roles: ["cnsAdmin", "cnsManager", "cnsInspector", "ppoadmin", "partner"], title: 'Тех. надзор' },
		children: [
			{ path: '', component: TsuIndexComponent, data: { title: 'Объекты' } },
			{ path: 'areas', component: TsuAreasComponent, data: { title: 'Объекты', detach: true } },
			{
				path: 'areas/:id', component: TsuAreaComponent, data: { title: 'Объект' },
				children: [
					{ path: '', component: TsuAreaPartsComponent, data: { title: 'Расположения' } },
					{
						path: ':id', component: TsuAreaPartComponent, data: { title: 'Расположение' },
						children: [
							{
								path: '', component: TsuPartChildrenComponent, data: { title: 'Детализация' },
							}
						]
					}
				]
			}
		]
};

export { TsuRoutes };
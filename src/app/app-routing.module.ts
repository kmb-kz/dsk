import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ObjectComponent } from './pages/ppo/object/object.component';
import { AccountComponent } from './pages/account/account.component';
import { StandardsComponent } from './pages/std/standard/standards/standards.component';
import { Standards2Component } from './pages/std/standard2/standards/standards.component';
import { ObjectdetailComponent } from './pages/ppo/objectdetail/objectdetail.component';
import { ChecklistdetailComponent } from './pages/ppo/checklistdetail/checklistdetail.component';
import { ChecklistfdetailComponent } from './pages/ppo/checklistfdetail/checklistfdetail.component';
import { GrlettersComponent } from './pages/ppo/grletters/grletters.component';
import { StandardeditComponent } from './pages/std/standard/standardedit/standardedit.component';
import { StandardtemplatesComponent } from './pages/std/template/standardtemplates/standardtemplates.component';
import { StandardversionsComponent } from './pages/std/version/standardversions/standardversions.component';
import { StandardtemplateeditComponent } from './pages/std/template/standardtemplateedit/standardtemplateedit.component';
import { StandardtemplatedetailsComponent } from './pages/std/template/standardtemplatedetails/standardtemplatedetails.component';
import { StandardversiondetailsComponent } from './pages/std/version/standardversiondetails/standardversiondetails.component';
import { AreasComponent } from './pages/std/area/areas/areas.component';
import { AuthGuard } from './guards/auth.guard';
import { StdmoduleComponent } from './pages/std/stdmodule/stdmodule.component';
import { StdindexComponent } from './pages/std/stdindex/stdindex.component';
import { AreaComponent } from './pages/std/area/area/area.component';
import { AreadetailsComponent } from './pages/std/area/area/areadetails/areadetails.component';
import { AreastandarddetailsComponent } from './pages/std/area/area/areastandard/areastandarddetails/areastandarddetails.component';
import { AreastandardchangeComponent } from './pages/std/area/area/areastandard/areastandardchange/areastandardchange.component';
import { AreastandardsComponent } from './pages/std/area/area/areastandards/areastandards.component';
import { AreaaddstandardComponent } from './pages/std/area/area/areaaddstandard/areaaddstandard.component';
import { AreaimporttemplateComponent } from './pages/std/area/area/areaimporttemplate/areaimporttemplate.component';
import { AreastandardComponent } from './pages/std/area/area/areastandard/areastandard.component';
import { StandardComponent } from './pages/std/standard/standard/standard.component';
import { StandarddetailsComponent } from './pages/std/standard/standard/standarddetails/standarddetails.component';
import { StandardversionComponent } from './pages/std/standard/standard/standardversion/standardversion.component';
import { AreaimportgroupComponent } from './pages/std/area/area/areaimportgroup/areaimportgroup.component';
import { CnsAreaComponent } from './pages/cns/cns-area/cns-area.component';
import { CnsComponent } from './pages/cns/cns.component';
import { CnsAreasComponent } from './pages/cns/cns-areas/cns-areas.component';
import { CnsAreaPartsComponent } from './pages/cns/cns-area/cns-area-parts/cns-area-parts.component';
import { CnsAreaPartComponent } from './pages/cns/cns-area/cns-area-part/cns-area-part.component';
import { RpmComponent } from './pages/rpm/rpm/rpm.component';
import { RpmobjectComponent } from './pages/rpm/rpmobject/rpmobject.component';
import { RpmremarkComponent } from './pages/rpm/rpmremark/rpmremark.component';
import { CnsIndexComponent } from './pages/cns/cns-index/cns-index.component';
import { ObjectsComponent } from './pages/objects/objects.component';
import { ObjectsdetailComponent } from "./pages/objects/detail/objectsdetail.component";
import { CnsPartSchemeComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-part-scheme.component';
import { CnsSchemePointComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-scheme-point.component';
import { CnsSchemePanelComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-panel/cns-scheme-panel.component';
import { CnsPartChildrenComponent } from './pages/cns/cns-area/cns-area-part/cns-part-children/cns-part-children.component';
import { CnsPartSchemeAddComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme-add/cns-part-scheme-add.component';
import { RequestsComponent } from './pages/std/requests/requests.component';
import { InspectionsComponent } from './pages/ppo/inspections/inspections.component';
import { CnsEditVolumeService } from "./services/cns/cns-edit-volume.service";
import { EditVolumeComponent } from "./pages/cns/edit-volume/edit-volume.component";
import { CnsPartnerComponent } from './pages/cns/cns-partner/cns-partner.component';
import { CnsContractComponent } from './pages/cns/cns-contract/cns-contract.component';
import { CnsConstructivesComponent } from './pages/cns/cns-constructives/cns-constructives.component';
import { CnsStatsComponent } from './pages/cns/cns-stats/cns-stats.component';
import { CnsStatAreapartComponent } from './pages/cns/cns-stats/cns-stat-areapart/cns-stat-areapart.component';

import { CnsStagesComponent } from './pages/cns/cns-stages/cns-stages.component';
import { StandardcopyComponent } from './pages/std/standard/standardcopy/standardcopy.component';
import { CnsPartVisitLogEditComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-part-visit-log-edit/cns-part-visit-log-edit.component';
import { CnsPartnersAccountingComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-partners-accounting.component';
import { CnsAccountingOperComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-oper/cns-accounting-oper.component';
import { CnsAccountingStoreComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-store/cns-accounting-store.component';
import { CnsAccountingM29Component } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-m29/cns-accounting-m29.component';
import { CnsPartVisitComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-part-visit.component';
import { CnsMaterialsComponent } from './pages/cns/cns-materials/cns-materials.component';
import { CnsTechcardComponent } from './pages/cns/cns-techcard/cns-techcard.component';
import { CnsStatParametersComponent } from './pages/cns/cns-stats/cns-stat-parameters/cns-stat-parameters.component';
import { LocationsAreaComponent } from './pages/rpm/admin/locations-area/locations-area.component';
import { LocationsAreaDetailComponent } from './pages/rpm/admin/locations-area/locations-area-detail/locations-area-detail.component';
import { CnsContractConstructivesComponent } from './pages/cns/cns-contract/cns-contract-constructives/cns-contract-constructives.component';
import { RpmConstructivesComponent } from './pages/rpm/admin/rpm-constructives/rpm-constructives.component';
import { LocationChildsComponent } from './pages/rpm/admin/locations-area/location-childs/location-childs.component';
import { RpmAreaComponent } from './pages/rpm/admin/locations-area/rpm-area/rpm-area.component';
import { LocationChildComponent } from './pages/rpm/admin/locations-area/location-childs/location-child/location-child.component';
import { RpmPartsComponent } from './pages/rpm/admin/locations-area/location-childs/rpm-parts/rpm-parts.component';
import { RpmPartChildrenComponent } from './pages/rpm/admin/locations-area/location-childs/location-child/rpm-part-children/rpm-part-children.component';
import { CnsAreaAnswersComponent } from './pages/cns/cns-area/cns-area-answers/cns-area-answers.component';
import { RemarksComponent } from './pages/rpm/rpmremark/remarks/remarks.component';
import { RemarkInfoComponent } from './pages/rpm/rpmremark/remarks/remark-info/remark-info.component';
import { CnsAccountingCertComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-accounting-cert.component';
import { CnsAccCertDocComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-acc-cert-doc/cns-acc-cert-doc.component';
import { CnsAccCertListComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-acc-cert-list/cns-acc-cert-list.component';
import { RpmReportComponent } from './pages/rpm/admin/rpm-report/rpm-report.component';
import { RpmReportGlobalComponent } from './pages/rpm/admin/rpm-report/rpm-report-global/rpm-report-global.component';
import { RpmReportSelectiveComponent } from './pages/rpm/admin/rpm-report/rpm-report-selective/rpm-report-selective.component';
import { RpmReportStatisticsComponent } from './pages/rpm/admin/rpm-report/rpm-report-statistics/rpm-report-statistics.component';
import { RpmReportActiveComponent } from './pages/rpm/admin/rpm-report/rpm-report-active/rpm-report-active.component';
import { RpmReportMonthComponent } from './pages/rpm/admin/rpm-report/rpm-report-month/rpm-report-month.component';
import { RpmReportInspectorsComponent } from './pages/rpm/admin/rpm-report/rpm-report-inspectors/rpm-report-inspectors.component';
import { ChangeprofileComponent } from './pages/account/changeprofile/changeprofile.component';
import { OkkComponent } from './pages/okk/okk.component';
import { OkkRoughingComponent } from './pages/okk/okk-roughing/okk-roughing.component';
import { OkkFiniteComponent } from './pages/okk/okk-finite/okk-finite.component';
import { OkkOspComponent } from './pages/okk/okk-osp/okk-osp.component';
import { OkkAreaComponent } from './pages/okk/okk-area/okk-area.component';
import { OkkAreaPartsComponent } from './pages/okk/okk-area/okk-area-parts/okk-area-parts.component';
import { OkkAreaPartComponent } from './pages/okk/okk-area/okk-area-part/okk-area-part.component';
import { OkkPartChildrenComponent } from './pages/okk/okk-area/okk-area-part/okk-part-children/okk-part-children.component';
import { OkkPartSchemeComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme/okk-part-scheme.component';
import { OkkPartSchemeAddComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme-add/okk-part-scheme-add.component';
import { OkkSchemePanelComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme/okk-scheme-panel/okk-scheme-panel.component';
import { CnsStatPartnersComponent } from './pages/cns/cns-stats/cns-stat-partners/cns-stat-partners.component';
import { OkkPartCheckComponent } from './pages/okk/okk-part-check/okk-part-check.component';
import { OkkPartCheckPanelComponent } from './pages/okk/okk-part-check/okk-part-check-panel/okk-part-check-panel.component';
import { OkkPartCheckRemarkComponent } from './pages/okk/okk-part-check/okk-part-check-remark/okk-part-check-remark.component';

import { TsuRoutes } from './app-routing.module.tsu-part';
import { OkkPartRoomsComponent } from './pages/okk/okk-part-check/okk-part-rooms/okk-part-rooms.component';
import { RpmReportCriticalComponent } from './pages/rpm/admin/rpm-report/rpm-report-critical/rpm-report-critical.component';
import { RpmFixChecklistComponent } from './pages/rpm/rpmremark/rpm-fix-checklist/rpm-fix-checklist.component';
import { RpmLlcComponent } from './pages/rpm/admin/rpm-llc/rpm-llc.component';
import { RpmReportGmComponent } from './pages/rpm/admin/rpm-report/rpm-report-gm/rpm-report-gm.component';
import { RpmGmoComponent } from './pages/rpm/rpm-gmo/rpm-gmo.component';

import { RpmFixConstructivesComponent } from './pages/rpm/admin/rpm-fix-constructives/rpm-fix-constructives.component';

const routes: Routes = [
  { path: 'profile', component: ChangeprofileComponent, data: { title: 'Профиль' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'm/okk/roughing', loadChildren: 'app/modules/okk/roughing/roughing.module#RoughingModule' },
  { path: 'm/area', loadChildren: 'app/modules/area/area.module#AreaModule' },
  { path: 'm/cns', loadChildren: 'app/modules/cns/cns.module#CnsModule' },
  { path: 'login', component: LoginComponent, data: { title: 'Авторизация' } },
  { path: 'account/users', component: AccountComponent, data: { title: 'Пользователи' } },
  {
    path: 'objects', canActivate: [AuthGuard],
    data: {
      roles: ['all'], title: 'Все объекты'
    },
    children: [
      { path: '', component: ObjectsComponent, data: { title: 'Объекты' } },
      { path: 'detail/:id', component: ObjectsdetailComponent, data: { title: 'Детальная страница объекта' } }
    ]

  },
  {
    path: 'ppo', canActivate: [AuthGuard],
    data: { roles: ['admin', 'ppoadmin', 'okk', 'ppoinspector', 'inspector', 'projectmanager'], title: 'Прием-передача объектов' },
    children: [
      {
        path: 'object', data: { title: 'Объекты' },
        children: [
          { path: '', component: ObjectComponent, data: { title: 'Список объектов' } },
          { path: 'detail/:id', component: ObjectdetailComponent, data: { title: 'Детальная страница объекта' } },
          { path: 'checklist/detail/:id', component: ChecklistdetailComponent, data: { title: 'Страница Чек Лист' } },
          { path: 'checklistf/detail/:id', component: ChecklistfdetailComponent, data: { title: 'Страница Чек Лист(Ф)' } },
          { path: 'grletters/:id', component: GrlettersComponent, data: { title: 'Гарантийные письма' } }
        ]
      },
      { path: '', component: ObjectComponent, data: { title: 'Объекты' } },
      { path: 'inspections', component: InspectionsComponent, data: { title: 'График проверок' } }
    ]
  },
  {
    path: 'okk', component: OkkComponent, canActivate: [AuthGuard],
    data: {
      roles: ["Admin", "okkAdmin", "okkInspector", "partner", "cnsmanager", "master", "prorab"],
      title: 'Строительство ОКК'
    },
    children: [
      { path: 'roughing', component: OkkRoughingComponent, data: { title: 'Чистовая отделка' } },
      { path: 'finite', component: OkkFiniteComponent, data: { title: 'Черновая отделка' } },
      { path: 'osp', component: OkkOspComponent, data: { title: 'ОСП' } },
      {
        path: 'roughing/area/:id', component: OkkAreaComponent, data: { title: 'Проекты' },
        children: [
          { path: '', component: OkkAreaPartsComponent, data: { title: 'Расположения' } },
          {
            path: ':id', component: OkkAreaPartComponent, data: { title: 'Расположение' },
            children: [
              {
                path: '', component: OkkPartChildrenComponent, data: { title: 'Детализация' },
              },
              {
                path: 'scheme/:id', component: OkkPartSchemeAddComponent, data: { title: 'Редактировать схему' },
              },
              {
                path: 'scheme', component: OkkPartSchemeAddComponent, data: { title: 'Добавить схему' },
              },
              {
                path: 'check/:areaID', component: OkkPartCheckComponent, data: { title: 'Квартира' },

              },
            ]
          },
        ]
      },
      {
        path: 'finite/area/:id', component: OkkAreaComponent, data: { title: 'Проекты' },
        children: [
          { path: '', component: OkkAreaPartsComponent, data: { title: 'Расположения' } },
          {
            path: ':id', component: OkkAreaPartComponent, data: { title: 'Расположение' },
            children: [
              {
                path: '', component: OkkPartChildrenComponent, data: { title: 'Детализация' },
              },
              {
                path: 'scheme/:id', component: OkkPartSchemeAddComponent, data: { title: 'Редактировать схему' },
              },
              {
                path: 'scheme', component: OkkPartSchemeAddComponent, data: { title: 'Добавить схему' },
              },
              {
                path: 'check/:areaID', component: OkkPartCheckComponent, data: { title: 'Квартира' },

              },
              {
                path: ':id', component: OkkPartCheckComponent, data: { title: 'Квартира' },
                children: [
                  { path: 'list/:id', component: OkkPartCheckPanelComponent, data: { title: 'Проверка' } },
                  {
                    path: ':id', component: OkkPartCheckRemarkComponent, data: { title: 'Чек лист' }
                  }
                ]
              },
            ]
          },
        ]
      },
      {
        path: 'osp/area/:id', component: OkkAreaComponent, data: { title: 'Проекты' },
        children: [
          { path: '', component: OkkAreaPartsComponent, data: { title: 'Расположения' } },
          {
            path: ':id', component: OkkAreaPartComponent, data: { title: 'Расположение' },
            children: [
              {
                path: 'scheme/:id', component: OkkPartSchemeAddComponent, data: { title: 'Редактировать схему' },
              },
              {
                path: 'scheme', component: OkkPartSchemeAddComponent, data: { title: 'Добавить схему' },
              },

              {
                path: ':id', component: OkkPartCheckComponent, data: { title: 'Квартира' },
                children: [
                  {
                    path: 'list/:id', component: OkkPartCheckRemarkComponent, data: { title: 'Чек лист' }
                  }
                ]
              },
            ]
          },

        ]
      },
    ]

  },

  {
    path: 'cns', component: CnsComponent, canActivate: [AuthGuard],
    data: {
      roles: ["Admin", "cnsAdmin", "cnsManager", "cnsInspector", "partner", "projectmanager", "okkadmin", "okkinspector", "master", "prorab", "guest"],
      title: 'Строительство'
    },
    children: [
      { path: '', component: CnsIndexComponent, data: { title: 'Объекты' } },
      { path: 'area', component: CnsAreasComponent, data: { title: 'Объекты', detach: true } },
      { path: 'partner', component: CnsPartnerComponent, data: { title: 'Подрядчики', detach: true } },
      { path: 'material', component: CnsMaterialsComponent, data: { title: 'Материалы', detach: true } },
      { path: 'techcard', component: CnsTechcardComponent, data: { title: 'Тех. карта', detach: true } },
      { path: 'contract/:id', component: CnsContractComponent, data: { title: 'Договоры' } },
      { path: 'contractconstructives/:id', component: CnsContractConstructivesComponent, data: { title: 'Конструктивы' } },
      { path: 'edit-volume', component: EditVolumeComponent, data: { title: 'Редактирование объема', detach: true } },
      { path: 'constructives', component: CnsConstructivesComponent, data: { title: 'Конструктивы', detach: true } },
      { path: 'stages/:id', component: CnsStagesComponent, data: { title: 'Этапы чек листа' } },
      {
        path: 'stats', component: CnsStatsComponent, data: { title: 'Статистика' },
        children: [
          { path: 'constructive', component: CnsStatParametersComponent, data: { title: 'По точкам' } },
          { path: 'partners', component: CnsStatPartnersComponent, data: { title: 'У подрядчиков' } },
          { path: '', component: CnsStatAreapartComponent, data: { title: 'Расположение' } }
        ]
      },
      {
        path: 'area/:id', component: CnsAreaComponent, data: { title: 'Объект' },
        children: [
          { path: 'answers', component: CnsAreaAnswersComponent, data: { title: 'Замечания' } },
          { path: '', component: CnsAreaPartsComponent, data: { title: 'Расположения' } },
          {
            path: ':id', component: CnsAreaPartComponent, data: { title: 'Расположение' },
            children: [
              {
                path: 'visit', component: CnsPartVisitComponent, data: { title: 'Журнал посещений' },
                children: [
                  { path: '', component: CnsPartVisitLogEditComponent, data: { title: 'Партнеры' }, },
                  {
                    path: ':id', component: CnsPartnersAccountingComponent,
                    children: [
                      { path: '', redirectTo: 'oper', pathMatch: 'full' },
                      { path: 'oper', component: CnsAccountingOperComponent, data: { title: 'Оперативный учет' } },
                      { path: 'store', component: CnsAccountingStoreComponent, data: { title: 'Накопитель' } },
                      { path: 'm29', component: CnsAccountingM29Component, data: { title: 'Справка М-29' } },
                      {
                        path: 'cert', component: CnsAccountingCertComponent, data: { title: 'Справка' },
                        children: [
                          { path: '', component: CnsAccCertListComponent, data: { title: 'Список' } },
                          { path: ':id', component: CnsAccCertDocComponent, data: { title: 'Документ' } }
                        ]
                      }
                    ]
                  },
                ]
              },

              /*{
                path: 'scheme/:idscheme/:id', component: CnsPartSchemeAddComponent, data: { title: 'Редактировать схему' },
              },*/
              {
                path: 'scheme/:id', component: CnsPartSchemeAddComponent, data: { title: 'Редактировать схему' },
              },
              {
                path: 'scheme', component: CnsPartSchemeAddComponent, data: { title: 'Добавить схему' },
              },
              {
                path: ':id', component: CnsPartSchemeComponent, data: { title: 'Схема' },
                children: [
                  { path: '', component: CnsSchemePanelComponent, data: { title: 'Конструктивы' } },
                  {
                    path: ':id', component: CnsSchemePointComponent, data: { title: 'Конструктив' }
                  }
                ]
              },
              {
                path: '', component: CnsPartChildrenComponent, data: { title: 'Детализация' },
              }
            ]
          }
        ]
      }
    ]
  },
  TsuRoutes,
  {
    path: 'rpm', canActivate: [AuthGuard],
    data: { roles: ['admin', 'rpmAdmin', 'rpmGM', 'inspectorRpm', 'managerRpm', 'developers', 'developerEmployee'], title: 'BI-Service' },
    children: [
      {
        path: 'object', data: { title: 'Объекты' },
        children: [
          { path: '', component: RpmobjectComponent, data: { title: 'Список объектов' } },
          {
            path: 'detail/:id', component: RpmremarkComponent, data: { title: 'Замечания по объекту' },
          },
          {
            path: 'fix/:id', component: RpmFixChecklistComponent, data: { title: 'Фиксированое замечания по объекту' },
          },
          {
            path: 'remark/:id', component: RemarkInfoComponent, data: { title: 'Детализация замечания' }
          }
        ]
      },
      {
        path: 'gmo', data: { title: 'Страница ГМО' },
        children: [
          { path: '', component: RpmGmoComponent, data: { title: 'Главная страница' } }
        ]
      },
      {
        path: 'admin', data: { title: 'Администрирование' },
        children: [
          { path: '', component: LocationsAreaComponent, data: { title: 'Объекты' } },
          {
            path: 'constructives', component: RpmConstructivesComponent, data: { title: 'Конструктивы' }
          },
          {
            path: 'fix-constructives', component: RpmFixConstructivesComponent, data: { title: 'Фиксированный конструктивы' }
          },
          { path: 'llc', component: RpmLlcComponent, data: { title: 'Сервисная служба' } },
          {
            path: 'locations', data: { title: 'Объекты' },
            children: [
              { path: '', component: RpmAreaComponent, data: { title: 'Список объектов' } },
              {
                path: ':id', component: LocationsAreaDetailComponent, data: { title: 'Расположения' }
              },
              {
                path: 'child/:id', component: LocationChildsComponent, data: { title: 'Расположения' },
                children: [
                  { path: '', component: RpmPartsComponent, data: { title: 'Расположение' } },
                  {
                    path: ':id', component: LocationChildComponent, data: { title: 'Детализация расположение' },
                    children: [
                      { path: '', component: RpmPartChildrenComponent, data: { title: 'Детализация' } }
                    ]
                  }


                ]
              }

            ]
          },

          {
            path: 'report', component: RpmReportComponent, data: { roles: ['admin'], title: 'Отчет' },
            children: [
              { path: 'global', component: RpmReportGlobalComponent, data: { title: 'Общий' } },
              { path: 'selective', component: RpmReportSelectiveComponent, data: { title: 'Выборочная выгрузка' } },
              { path: 'statistics', component: RpmReportStatisticsComponent, data: { title: 'Статистика' } },
              { path: 'active', component: RpmReportActiveComponent, data: { title: 'Количество активных' } },
              { path: 'month', component: RpmReportMonthComponent, data: { title: 'Кол-во замечаний в месяц (по инспекторам)' } },
              { path: 'inspectors', component: RpmReportInspectorsComponent, data: { title: 'Статистика по инспекторам' } },
              { path: 'critical', component: RpmReportCriticalComponent, data: { title: 'Статистика по критическим замечаниям' } },
              { path: 'gm', component: RpmReportGmComponent, data: { title: 'Сводный отчет по МО' } },
            ]
          }




        ]
      }


    ]
  },

  {
    path: 'std', component: StdmoduleComponent, canActivate: [AuthGuard],
    data: { roles: ['admin', 'projectmanager', 'cnsadmin'], title: 'Корп.стандарты' },
    children: [
      {
        path: '', component: StdindexComponent, data: { title: 'Меню' }
      },
      {
        path: 'standard', data: { title: 'Стандарты' },
        children: [
          { path: '', redirectTo: 'standards', pathMatch: 'full' },
          { path: 'standards', component: StandardsComponent, data: { title: 'Поиск', detach: true } },
          { path: 'standards2', component: Standards2Component, data: { title: 'Поиск', detach: true } },
          { path: 'copy', component: StandardcopyComponent, data: { title: 'Копирование показателей' } },
          { path: 'edit/:id', component: StandardeditComponent, data: { title: 'Добавить' } },
          {
            path: ':id', component: StandardComponent, data: { title: 'Стандарт' },
            children: [
              { path: '', component: StandarddetailsComponent, data: { title: 'Детализация' } },
              { path: ':id', component: StandardversionComponent, data: { title: 'Версия' } }
            ]
          }
        ]
      },
      {
        path: 'requests', component: RequestsComponent, canActivate: [AuthGuard], data: { title: 'Запросы на замену' }
      },

      {
        path: 'template', data: { title: 'Шаблоны' },
        children: [
          { path: '', component: StandardtemplatesComponent, data: { title: 'Поиск' } },
          { path: 'edit/:id', component: StandardtemplateeditComponent, data: { title: 'Редактировать' } },
          { path: ':id', component: StandardtemplatedetailsComponent, data: { title: 'Детализация' } },
        ]
      },
      {
        path: 'version', data: { title: 'Версии' },
        children: [
          { path: '', component: StandardversionsComponent, data: { title: 'Поиск' } },
          { path: 'edit/:id', component: StandardversionsComponent, data: { title: 'Редактировать' } },
          { path: ':id', component: StandardversiondetailsComponent, data: { title: 'Детализация' } },
        ]
      },
      {
        path: 'area', data: { title: 'Объекты' },
        children: [
          { path: '', redirectTo: 'areas', pathMatch: 'full' },
          { path: 'areas', component: AreasComponent, data: { title: 'Список', detach: true } },
          {
            path: ':id', component: AreaComponent, data: { title: 'Обьект' },
            children: [
              { path: '', component: AreadetailsComponent, data: { title: 'Детализация' } },
              { path: 'addStandard', component: AreaaddstandardComponent, data: { title: 'Добавить стандарт' } },
              { path: 'importTemplate', component: AreaimporttemplateComponent, data: { title: 'Импортировать из шаблона' } },
              { path: 'importGroup', component: AreaimportgroupComponent, data: { title: 'Импортировать из группы' } },
              { path: 'standard', component: AreastandardsComponent, data: { title: 'Стандарты' } },
              {
                path: 'standard/:id', component: AreastandardComponent, data: { title: 'Стандарт' },
                children: [
                  { path: '', component: AreastandarddetailsComponent, data: { title: 'Детализация' } },
                  { path: 'change', component: AreastandardchangeComponent, data: { title: 'Запрос на замену' } }
                ]
              },
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
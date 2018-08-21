import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule, Validator, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {
  DialogModule, FileUploadModule, InputTextareaModule, DataTableModule, MultiSelectModule,
  SharedModule, AutoCompleteModule, CalendarModule, InputTextModule, GalleriaModule, FieldsetModule,
  TreeModule, TreeNode, ScheduleModule, DropdownModule, ChartModule, DragDropModule, PickListModule,
  TreeTableModule, ContextMenuModule, ContextMenu, MenuModule
} from 'primeng/primeng';
import { MomentModule } from 'angular2-moment';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ObjectComponent } from './pages/ppo/object/object.component';
import { HeaderComponent } from './header/header.component';
import { MegaMenuComponent } from './header/mega-menu/mega-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StandardsComponent } from './pages/std/standard/standards/standards.component';
import { Standards2Component } from './pages/std/standard2/standards/standards.component';
import { DataService } from './services/data.service';
import { ObjectdetailComponent } from './pages/ppo/objectdetail/objectdetail.component';
import { ChecklistdetailComponent } from './pages/ppo/checklistdetail/checklistdetail.component';
import { StandardService } from './services/std/standard.service';
import { NsiService } from './services/nsi.service';
import { PaginationComponent } from './pages/common/pagination/pagination.component';
import { FileComponent } from './pages/common/file/file.component';
import { StandardeditComponent } from './pages/std/standard/standardedit/standardedit.component';
import { StandardversionsComponent } from './pages/std/version/standardversions/standardversions.component';
import { StandardtemplatesComponent } from './pages/std/template/standardtemplates/standardtemplates.component';
import { StandardtemplateeditComponent } from './pages/std/template/standardtemplateedit/standardtemplateedit.component';
import { StandardversioneditComponent } from './pages/std/version/standardversionedit/standardversionedit.component';
import { StandardversiondetailsComponent } from './pages/std/version/standardversiondetails/standardversiondetails.component';
import { StandardtemplatedetailsComponent } from './pages/std/template/standardtemplatedetails/standardtemplatedetails.component';
import { GrlettersComponent } from './pages/ppo/grletters/grletters.component';

import { AreaService } from './services/std/area.service';
import { ChecklistfdetailComponent } from './pages/ppo/checklistfdetail/checklistfdetail.component';
import { FilesComponent } from './pages/common/files/files.component';
import { VersionService } from './services/std/version.service';
import { TemplateService } from './services/std/template.service';
import { MessageComponent } from './components/message/message.component';
import { FixClService } from './services/ppo/fix-cl.service';
import { StatisticService } from './services/statistic.service';
import { AreasComponent } from './pages/std/area/areas/areas.component';
import { FreeClService } from './services/ppo/free-cl.service';
import { AccountComponent } from './pages/account/account.component';
import { GridUserListComponent } from './pages/account/grid-user-list/grid-user-list.component';
import { UsersService } from './services/users/users.service';
import { NotificationsService } from './services/notifications/notifications.service';
import { HttpService } from './services/common/http.service';
import { AuthService } from './services/common/auth.service';
import { CheckInfoComponent } from './components/check-info/check-info.component';
import { ObjectService } from './services/ppo/object.service';
import { AuthGuard } from './guards/auth.guard';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AreadetailsComponent } from './pages/std/area/area/areadetails/areadetails.component';
import { AreastandardchangeComponent } from './pages/std/area/area/areastandard/areastandardchange/areastandardchange.component';
import { AreaComponent } from './pages/std/area/area/area.component';
import { StdmoduleComponent } from './pages/std/stdmodule/stdmodule.component';
import { StdindexComponent } from './pages/std/stdindex/stdindex.component';
import { AreastandarddetailsComponent } from './pages/std/area/area/areastandard/areastandarddetails/areastandarddetails.component';
import { AreastandardsComponent } from './pages/std/area/area/areastandards/areastandards.component';
import { AreaimporttemplateComponent } from './pages/std/area/area/areaimporttemplate/areaimporttemplate.component';
import { AreaaddstandardComponent } from './pages/std/area/area/areaaddstandard/areaaddstandard.component';
import { AreastandardComponent } from './pages/std/area/area/areastandard/areastandard.component';
import { CustomReuseStrategy } from './route.reuse';
import { StandardComponent } from './pages/std/standard/standard/standard.component';
import { StandardversionComponent } from './pages/std/standard/standard/standardversion/standardversion.component';
import { StandarddetailsComponent } from './pages/std/standard/standard/standarddetails/standarddetails.component';
import { SearchPipe } from './pages/account/pipe/search.pipe';
import { Notifications } from './helpers/notification';
import { ToasterComponent } from './components/toaster/toaster.component';
import { FileOneComponent } from './components/file-one/file-one.component';
import { AreaimportgroupComponent } from './pages/std/area/area/areaimportgroup/areaimportgroup.component';
import { CnsAreasComponent } from './pages/cns/cns-areas/cns-areas.component';
import { CnsAreaComponent } from './pages/cns/cns-area/cns-area.component';
import { CnsAreaPartsComponent } from './pages/cns/cns-area/cns-area-parts/cns-area-parts.component';
import { CnsAreaPartComponent } from './pages/cns/cns-area/cns-area-part/cns-area-part.component';
import { CnsComponent } from './pages/cns/cns.component';
import { CnsAreaService } from './services/cns/cns-area.service';
import { RpmComponent } from './pages/rpm/rpm/rpm.component';
import { RpmobjectComponent } from './pages/rpm/rpmobject/rpmobject.component';
import { RpmremarkComponent } from './pages/rpm/rpmremark/rpmremark.component';
import { RpmObjectService } from './services/rpm/rpm-object.service';
import { RpmRemarkService } from './services/rpm/rpm-remark.service';
import { CnsIndexComponent } from './pages/cns/cns-index/cns-index.component';
import { CnsPartSchemeComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-part-scheme.component';
import { CnsPartChildrenComponent } from './pages/cns/cns-area/cns-area-part/cns-part-children/cns-part-children.component';

import { ObjectsComponent } from './pages/objects/objects.component';
import { ObjectsService } from './services/objects.service';
import { ObjectsdetailComponent } from './pages/objects/detail/objectsdetail.component';
import { CnsSchemePointComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-scheme-point.component';
import { CnsSchemePanelComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-panel/cns-scheme-panel.component';
import { CnsAnswerService } from './services/cns/cns-answer.service';
import { CnsAreaPartListComponent } from './pages/cns/cns-area/cns-area-part-list/cns-area-part-list.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { PushComponent } from './components/push/push.component';
import { CnsPartSchemeAddComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme-add/cns-part-scheme-add.component';
import { CnsPointParameterComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-parameter/cns-point-parameter.component';
import { CnsParameterChatComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-parameter/cns-parameter-chat/cns-parameter-chat.component';
import { RequestsComponent } from './pages/std/requests/requests.component';
import { InspectionsComponent } from './pages/ppo/inspections/inspections.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleService } from './services/ppo/schedule.service';
import { CnsPartnerComponent } from './pages/cns/cns-partner/cns-partner.component';
import { CnsPartnerService } from './services/cns/cns-partner.service';
import { CnsContractComponent } from './pages/cns/cns-contract/cns-contract.component';
import { CnsVisitLogService } from './services/cns/cns-visit-log.service';
import { CnsEditVolumeService } from './services/cns/cns-edit-volume.service';
import { EditVolumeComponent } from './pages/cns/edit-volume/edit-volume.component';
import { CnsConstructivesComponent } from './pages/cns/cns-constructives/cns-constructives.component';
import { CnsConstructiveComponent } from './pages/cns/cns-constructives/cns-constructive/cns-constructive.component';
import { CnsConstructiveService } from './services/cns/cns-constructive.service';
import { CnsStatPartnersComponent } from './pages/cns/cns-stats/cns-stat-partners/cns-stat-partners.component';
import { CnsStatAreapartComponent } from './pages/cns/cns-stats/cns-stat-areapart/cns-stat-areapart.component';
import { CnsStatsComponent } from './pages/cns/cns-stats/cns-stats.component';
import { CnsStagesComponent } from './pages/cns/cns-stages/cns-stages.component';
import { CnsPointStageComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-stage/cns-point-stage.component';
import { CnsPointMaterialsComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-materials/cns-point-materials.component';
import { CnsPointMaterialComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-materials/cns-point-material/cns-point-material.component';
import { RpmRemarkChecklistComponent, RpmRemarkChecklistComponentModel } from './pages/rpm/rpmremark/rpm-remark-checklist/rpm-remark-checklist.component';
import { StandardcopyComponent } from './pages/std/standard/standardcopy/standardcopy.component';
import { CnsPartVisitComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-part-visit.component';
import { CnsPartVisitLogEditComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-part-visit-log-edit/cns-part-visit-log-edit.component';
import { CnsPartnersAccountingComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-partners-accounting.component';
import { CnsAccountingOperComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-oper/cns-accounting-oper.component';
import { CnsAccountingStoreComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-store/cns-accounting-store.component';
import { CnsAccountingM29Component } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-m29/cns-accounting-m29.component';
import { StandardstageComponent } from './pages/std/standard/standard/standardstage/standardstage.component';
import { CnsMaterialsComponent } from './pages/cns/cns-materials/cns-materials.component';
import { CnsTechcardComponent } from './pages/cns/cns-techcard/cns-techcard.component';
import { CnsStatParametersComponent } from './pages/cns/cns-stats/cns-stat-parameters/cns-stat-parameters.component';
import { CnsContractStagesComponent } from './pages/cns/cns-contract/cns-contract-stages/cns-contract-stages.component';
import { CnsContractStageComponent } from './pages/cns/cns-contract/cns-contract-stages/cns-contract-stage/cns-contract-stage.component';
import { LocationsAreaComponent } from './pages/rpm/admin/locations-area/locations-area.component';

import { LocationsAreaDetailComponent } from './pages/rpm/admin/locations-area/locations-area-detail/locations-area-detail.component';
import { ChildLocationsComponent } from './pages/rpm/admin/locations-area/locations-area-detail/child-locations/child-locations.component';
import { RpmStatisticsComponent } from './pages/rpm/admin/locations-area/locations-area-detail/rpm-statistics/rpm-statistics.component';
import { CnsSchemePanelNewPointComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-panel/cns-scheme-panel-new-point/cns-scheme-panel-new-point.component';
import { StandardItemComponent } from './pages/std/standard2/standards/standard-item/standard-item.component';
import { VersionItemComponent } from './pages/std/standard2/standards/standard-item/version-item/version-item.component';
import { CnsPointPercentageComponent } from './pages/cns/cns-area/cns-area-part/cns-part-scheme/cns-scheme-point/cns-point-percentage/cns-point-percentage.component';
import { CnsContractConstructivesComponent } from './pages/cns/cns-contract/cns-contract-constructives/cns-contract-constructives.component';
import { CnsAccM29StepComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-m29/cns-acc-m29-step/cns-acc-m29-step.component';
import { CnsAccStoreStepComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-store/cns-acc-store-step/cns-acc-store-step.component';
import { RpmAreaPartsService } from './services/rpm/rpm-area-parts.service';
import { LocationConstructivesComponent } from './pages/rpm/admin/locations-area/locations-area-detail/location-constructives/location-constructives.component';
import { RpmConstructivesService } from './services/rpm/rpm-constructives.service';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { RpmConstructivesComponent } from './pages/rpm/admin/rpm-constructives/rpm-constructives.component';
import { RpmConstructiveComponent, ArraySortPipe } from './pages/rpm/admin/rpm-constructives/rpm-constructive/rpm-constructive.component';
import { LocationChildsComponent } from './pages/rpm/admin/locations-area/location-childs/location-childs.component';
import { RpmAreaComponent } from './pages/rpm/admin/locations-area/rpm-area/rpm-area.component';
import { LocationChildComponent } from './pages/rpm/admin/locations-area/location-childs/location-child/location-child.component';
import { ChildListComponent } from './pages/rpm/admin/locations-area/location-childs/location-child/child-list/child-list.component';
import { RpmPartsComponent } from './pages/rpm/admin/locations-area/location-childs/rpm-parts/rpm-parts.component';
import { RpmPartChildrenComponent } from './pages/rpm/admin/locations-area/location-childs/location-child/rpm-part-children/rpm-part-children.component';

import { CnsAreaAnswersComponent } from './pages/cns/cns-area/cns-area-answers/cns-area-answers.component';
import { RemarksComponent } from './pages/rpm/rpmremark/remarks/remarks.component';
import { RemarkInfoComponent } from './pages/rpm/rpmremark/remarks/remark-info/remark-info.component';
import { ChecklistMoreInfoComponent } from './pages/rpm/rpmremark/rpm-remark-checklist/checklist-more-info/checklist-more-info.component';

import { CnsAccCertItemComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-acc-cert-item/cns-acc-cert-item.component';
import { CnsAccountingCertComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-accounting-cert.component';
import { CnsAccCertDocComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-acc-cert-doc/cns-acc-cert-doc.component';
import { CnsAccCertListComponent } from './pages/cns/cns-area/cns-area-part/cns-part-visit/cns-partners-accounting/cns-accounting-cert/cns-acc-cert-list/cns-acc-cert-list.component';
import { RpmSendUsersService } from './services/rpm/rpm-send-users.service';
import { RpmRemarkChecklistOneComponent } from './pages/rpm/rpmremark/rpm-remark-checklist/rpm-remark-checklist-one/rpm-remark-checklist-one.component';
import { SearchComponent } from './pages/account/search/search.component';
import { RpmRemarkChecklistConstructiveComponent } from './pages/rpm/rpmremark/rpm-remark-checklist/rpm-remark-checklist-constructive/rpm-remark-checklist-constructive.component';
import { RemarkDetailComponent } from './pages/rpm/rpmremark/remarks/remark-detail/remark-detail.component';
import { RpmReportComponent } from './pages/rpm/admin/rpm-report/rpm-report.component';
import { RpmReportGlobalComponent } from './pages/rpm/admin/rpm-report/rpm-report-global/rpm-report-global.component';
import { RpmReportSelectiveComponent } from './pages/rpm/admin/rpm-report/rpm-report-selective/rpm-report-selective.component';
import { RpmReportStatisticsComponent } from './pages/rpm/admin/rpm-report/rpm-report-statistics/rpm-report-statistics.component';
import { RpmReportActiveComponent } from './pages/rpm/admin/rpm-report/rpm-report-active/rpm-report-active.component';
import { RpmReportMonthComponent } from './pages/rpm/admin/rpm-report/rpm-report-month/rpm-report-month.component';
import { RpmReportInspectorsComponent } from './pages/rpm/admin/rpm-report/rpm-report-inspectors/rpm-report-inspectors.component';

import { DateHelpers } from './helpers/date-helpers';
import { SanitizeHtmlDirective } from './helpers/sanitizeHtmlDirective';
import { ChangeprofileComponent } from './pages/account/changeprofile/changeprofile.component';


import { LazyLoadModule } from '@greg-md/ng-lazy-load';
import { PpoClfItemComponent } from './pages/ppo/checklistfdetail/ppo-clf-item/ppo-clf-item.component';
import { QcModalComponent } from './pages/common/qc-modal/qc-modal.component';
import { PpoClfItemChildrenComponent } from './pages/ppo/checklistfdetail/ppo-clf-item/ppo-clf-item-children/ppo-clf-item-children.component';
import { OkkComponent } from './pages/okk/okk.component';
import { OkkRoughingComponent } from './pages/okk/okk-roughing/okk-roughing.component';
import { OkkFiniteComponent } from './pages/okk/okk-finite/okk-finite.component';
import { OkkOspComponent } from './pages/okk/okk-osp/okk-osp.component';
import { OkkAreaComponent } from './pages/okk/okk-area/okk-area.component';
import { OkkAreaPartsComponent } from './pages/okk/okk-area/okk-area-parts/okk-area-parts.component';
import { OkkAreaPartComponent } from './pages/okk/okk-area/okk-area-part/okk-area-part.component';
import { OkkAreaPartListComponent } from './pages/okk/okk-area/okk-area-part-list/okk-area-part-list.component';
import { OkkPartChildrenComponent } from './pages/okk/okk-area/okk-area-part/okk-part-children/okk-part-children.component';
import { OkkPartSchemeComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme/okk-part-scheme.component';
import { OkkPartSchemeAddComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme-add/okk-part-scheme-add.component';
import { OkkSchemePanelComponent } from './pages/okk/okk-area/okk-area-part/okk-part-scheme/okk-scheme-panel/okk-scheme-panel.component';
import { RpmRemarkButtonsComponent } from './pages/rpm/rpmremark/rpm-remark-checklist/rpm-remark-checklist-one/rpm-remark-buttons/rpm-remark-buttons.component';
import { OkkPartCheckComponent } from './pages/okk/okk-part-check/okk-part-check.component';
import { OkkPartCheckPanelComponent } from './pages/okk/okk-part-check/okk-part-check-panel/okk-part-check-panel.component';
import { OkkPartCheckRemarkComponent } from './pages/okk/okk-part-check/okk-part-check-remark/okk-part-check-remark.component';
import { OkkAreaService } from './services/okk/okk-area.service';
import { OkkStagesComponent } from './pages/okk/okk-part-check/okk-stages/okk-stages.component';
import { OkkPartRoomsComponent } from './pages/okk/okk-part-check/okk-part-rooms/okk-part-rooms.component';
import { PartSelectorComponent } from './components/part-selector/part-selector.component';
import { OkkStandardService } from './services/okk/okk-standard.service';
import { OkkPartCheckReamrkChildComponent } from './pages/okk/okk-part-check/okk-part-check-reamrk-child/okk-part-check-reamrk-child.component';
import { OkkAnswerService } from './services/okk/okk-answer.service';
import { TsuComponent } from './pages/tsu/tsu.component';
import { TsuIndexComponent } from './pages/tsu/tsu-index/tsu-index.component';
import { TsuAreasComponent } from './pages/tsu/tsu-areas/tsu-areas.component';
import { TsuAreaComponent } from './pages/tsu/tsu-area/tsu-area.component';
import { TsuAreaPartsComponent } from './pages/tsu/tsu-area-parts/tsu-area-parts.component';
import { TsuAreaPartComponent } from './pages/tsu/tsu-area-part/tsu-area-part.component';
import { TsuAreaPartListComponent } from './pages/tsu/tsu-area-part-list/tsu-area-part-list.component';
import { TsuPartChildrenComponent } from './pages/tsu/tsu-part-children/tsu-part-children.component';
import { RemarksListComponent } from './pages/okk/okk-part-check/okk-part-check-reamrk-child/remarks-list/remarks-list.component';
import { QcModalOkkComponent } from './pages/common/qc-modal-okk/qc-modal-okk.component';
import { QcModalOkkChildComponent } from './pages/common/qc-modal-okk-child/qc-modal-okk-child.component';
import { RpmReportCriticalComponent } from './pages/rpm/admin/rpm-report/rpm-report-critical/rpm-report-critical.component';
import { PpoCommissionComponent } from './pages/ppo/objectdetail/ppo-commission/ppo-commission.component';
import { AreaDetourComponent } from './pages/rpm/admin/locations-area/locations-area-detail/area-detour/area-detour.component';
import { RpmFixChecklistComponent } from './pages/rpm/rpmremark/rpm-fix-checklist/rpm-fix-checklist.component';
import { RpmClfItemComponent } from './pages/rpm/rpmremark/rpm-fix-checklist/rpm-clf-item/rpm-clf-item.component';
import { RpmClfItemChildComponent } from './pages/rpm/rpmremark/rpm-fix-checklist/rpm-clf-item/rpm-clf-item-child/rpm-clf-item-child.component';
import { RpmLlcComponent } from './pages/rpm/admin/rpm-llc/rpm-llc.component';
import { RpmCheckMoreInfoComponent } from './pages/rpm/rpmremark/rpm-fix-checklist/rpm-clf-item/rpm-clf-item-child/rpm-check-more-info/rpm-check-more-info.component';
import { RpmReportGmComponent } from './pages/rpm/admin/rpm-report/rpm-report-gm/rpm-report-gm.component';
import { RpmGmoComponent } from './pages/rpm/rpm-gmo/rpm-gmo.component';
import { GmoRemarkListComponent } from './pages/rpm/rpm-gmo/gmo-remark-list/gmo-remark-list.component';
import { RpmStatisticsCriticalComponent } from './pages/rpm/admin/locations-area/locations-area-detail/rpm-statistics-critical/rpm-statistics-critical.component';
import { RpmResponsibleComponent } from './pages/rpm/admin/locations-area/locations-area-detail/rpm-responsible/rpm-responsible.component';
import { RpmFixConstructivesComponent } from './pages/rpm/admin/rpm-fix-constructives/rpm-fix-constructives.component';
// import { FilterObjectPipe, SortPipe } from './services/pipe/filter-object.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ObjectComponent,
    HeaderComponent,
    MegaMenuComponent,
    SidebarComponent,
    StandardsComponent,
    Standards2Component,
    ObjectdetailComponent,
    ChecklistdetailComponent,
    PaginationComponent,
    StandarddetailsComponent,
    FileComponent,
    StandardeditComponent,
    StandardversionsComponent,
    StandardtemplatesComponent,
    StandardtemplateeditComponent,
    StandardversioneditComponent,
    StandardversiondetailsComponent,
    StandardtemplatedetailsComponent,
    GrlettersComponent,

    ChecklistfdetailComponent,
    FilesComponent,
    AreastandardsComponent,
    AreastandardComponent,
    AreasComponent,
    MessageComponent,
    AccountComponent,
    GridUserListComponent,
    CheckInfoComponent,
    BreadcrumbComponent,
    AreadetailsComponent,
    AreastandardchangeComponent,
    AreaComponent,
    StdmoduleComponent,
    StdindexComponent,
    AreastandarddetailsComponent,
    AreaimporttemplateComponent,
    AreaaddstandardComponent,
    StandardComponent,
    StandardversionComponent,
    SearchPipe,
    StandardversionComponent,
    ToasterComponent,
    FileOneComponent,
    AreaimportgroupComponent,
    CnsAreasComponent,
    CnsAreaComponent,
    CnsAreaPartsComponent,
    CnsAreaPartComponent,
    CnsComponent,
    RpmComponent,
    RpmobjectComponent,
    RpmremarkComponent,
    CnsIndexComponent,
    CnsPartSchemeComponent,
    CnsPartChildrenComponent,
    ObjectsComponent,
    ObjectsdetailComponent,
    CnsSchemePointComponent,
    CnsSchemePanelComponent,
    CnsAreaPartListComponent,
    TreeViewComponent,
    PushComponent,
    CnsPartSchemeAddComponent,
    CnsPointParameterComponent,
    CnsParameterChatComponent,
    RequestsComponent,
    InspectionsComponent,
    ClickStopPropagationDirective,
    ScheduleComponent,
    CnsPartnerComponent,
    CnsContractComponent,
    CnsPartVisitLogEditComponent,
    CnsPartnersAccountingComponent,
    CnsAccountingOperComponent,
    EditVolumeComponent,
    CnsConstructivesComponent,
    CnsConstructiveComponent,
    CnsStatPartnersComponent,
    CnsStatAreapartComponent,
    CnsStatsComponent,
    CnsStagesComponent,
    CnsPointStageComponent,
    CnsPointMaterialsComponent,
    CnsPointMaterialComponent,
    RpmRemarkChecklistComponent,
    CnsAccountingStoreComponent,
    CnsAccountingM29Component,
    CnsPartnersAccountingComponent,
    StandardcopyComponent,
    CnsPartVisitComponent,
    StandardstageComponent,
    CnsMaterialsComponent,
    CnsTechcardComponent,
    CnsStatParametersComponent,
    CnsContractStagesComponent,
    CnsContractStageComponent,
    LocationsAreaComponent,
    LocationsAreaDetailComponent,
    ChildLocationsComponent,
    RpmStatisticsComponent,
    CnsSchemePanelNewPointComponent,
    StandardItemComponent,
    VersionItemComponent,
    CnsPointPercentageComponent,
    CnsContractConstructivesComponent,
    CnsAccM29StepComponent,
    CnsAccStoreStepComponent,
    LocationConstructivesComponent,
    CnsAreaAnswersComponent,
    CnsAccountingCertComponent,
    CnsAccCertItemComponent,
    RpmConstructivesComponent,
    RpmConstructiveComponent,
    LocationChildsComponent,
    RpmAreaComponent,
    LocationChildComponent,
    ChildListComponent,
    RpmPartsComponent,
    RpmPartChildrenComponent,
    CnsAreaAnswersComponent,
    RemarksComponent,
    RemarkInfoComponent,
    ChecklistMoreInfoComponent,
    CnsAccCertDocComponent,
    CnsAccCertListComponent,
    RpmRemarkChecklistOneComponent,
    SearchComponent,
    RpmRemarkChecklistConstructiveComponent,
    RemarkDetailComponent,
    RpmReportComponent,
    RpmReportGlobalComponent,
    RpmReportSelectiveComponent,
    RpmReportStatisticsComponent,
    RpmReportActiveComponent,
    RpmReportMonthComponent,
    PartSelectorComponent,
    RpmReportInspectorsComponent,
    SanitizeHtmlDirective,
    ChangeprofileComponent,
    PpoClfItemComponent,
    ArraySortPipe,
    QcModalComponent,
    PpoClfItemChildrenComponent,
    OkkComponent,
    OkkRoughingComponent,
    OkkFiniteComponent,
    OkkOspComponent,
    OkkAreaComponent,
    OkkAreaPartsComponent,
    OkkAreaPartComponent,
    OkkAreaPartListComponent,
    OkkPartChildrenComponent,
    OkkPartSchemeComponent,
    OkkPartSchemeAddComponent,
    OkkSchemePanelComponent,
    RpmRemarkButtonsComponent,
    OkkPartCheckComponent,
    OkkPartCheckPanelComponent,
    OkkPartCheckRemarkComponent,
    OkkStagesComponent,
    OkkPartRoomsComponent,
    PartSelectorComponent,
    OkkPartCheckReamrkChildComponent,
    TsuComponent,
    TsuIndexComponent,
    TsuAreasComponent,
    TsuAreaComponent,
    TsuAreaPartsComponent,
    TsuAreaPartComponent,
    TsuAreaPartListComponent,
    TsuPartChildrenComponent,
    RemarksListComponent,
    QcModalOkkComponent,
    QcModalOkkChildComponent,
    RpmReportCriticalComponent,
    PpoCommissionComponent,
    AreaDetourComponent,
    RpmFixChecklistComponent,
    RpmClfItemComponent,
    RpmClfItemChildComponent,
    RpmLlcComponent,
    RpmCheckMoreInfoComponent,
    RpmReportGmComponent,
    RpmGmoComponent,
    GmoRemarkListComponent,
    RpmStatisticsCriticalComponent,
    RpmResponsibleComponent,
    RpmFixConstructivesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule,
    GalleriaModule, DialogModule, FileUploadModule, InputTextareaModule, TreeModule, TreeTableModule, ContextMenuModule,
    MenuModule, DataTableModule, SharedModule, AutoCompleteModule, MultiSelectModule,
    CalendarModule, FieldsetModule, ToasterModule, NgxGalleryModule, ScheduleModule, DropdownModule, ChartModule, TreeModule,
    AngularDualListBoxModule, MomentModule, LazyLoadModule
  ],
  providers: [
    Title, AuthService, AuthGuard, HttpService, DataService, StandardService, CnsAnswerService,
    VersionService, TemplateService, NsiService, FixClService, StatisticService,
    FreeClService, AreaService, UsersService, ObjectService, ToasterService, Notifications, DateHelpers,
    RpmObjectService, RpmRemarkService, ToasterComponent, ObjectsService,
    CnsAreaService, ScheduleService, RpmSendUsersService, RpmRemarkChecklistComponentModel,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    NotificationsService, CnsConstructiveService, RpmAreaPartsService, RpmConstructivesService,
    OkkAreaService, OkkStandardService, OkkAnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router,
    private titleService: Title,
    private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      // change page title when url change
      if (e instanceof NavigationEnd) {
        var title = 'Контроль качества | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
        window.dispatchEvent(new CustomEvent('page-reload'));
      }
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.dispatchEvent(new CustomEvent('page-reload'));
    });
  }

}

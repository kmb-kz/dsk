import { Component, OnInit, Input } from '@angular/core';
import { StandardComponentModel } from '../../../../standard/standard/StandardComponentModel';
import { Stage, CnsConstructiveService } from '../../../../../../services/cns/cns-constructive.service';
import { Area, AreaService } from '../../../../../../services/std/area.service';
import { StandardService, ParameterPostModel } from '../../../../../../services/std/standard.service';
import { environment } from '../../../../../../../environments/environment';
import { Nsi } from '../../../../../../services/models/models';
import { NsiService } from '../../../../../../services/nsi.service';
import { AuthService } from '../../../../../../services/common/auth.service';

@Component({
  selector: 'app-version-item',
  templateUrl: './version-item.component.html',
  styleUrls: ['./version-item.component.css']
})
export class VersionItemComponent implements OnInit {

  selected: StandardComponentModel = new StandardComponentModel(); 
  validImages:any[] = [];
  invalidImages:any[] = [];
  stages: Stage[];
  areasByVersion: Promise<Area[]>;
  @Input() id: string; 
  dialogFlag: boolean = false;
  paramDialogFlag: boolean = false; 
  currentParameterId: string; 
  materials: Nsi[];
  newParam: ParameterPostModel = new ParameterPostModel() ; 
 
  constructor(public auth: AuthService,private client: StandardService,private areaService: AreaService, private nsi: NsiService, private constructiveService: CnsConstructiveService) { }

  ngOnInit() {
    this.nsi.materials().subscribe(x=>{ this.materials = x.result }); 
  }

  ngOnChanges()
  {
    this.loadStandard();
  }
  loadStandard(){
   
    this.client.get(this.id).then(i=>{
      this.selected.Standard =i;
      this.validImages = i.versions[0].validImages.map(j=> { return {source: environment.apiUrl + j.base64String ,alt:'', title:''};})
      this.invalidImages = i.versions[0].invalidImages.map(j=> { return {source: environment.apiUrl + j.base64String ,alt:'', title:''};})
      this.constructiveService.getStages(i.constructive.id).subscribe(x=>{
        this.stages = x.result;
      });
    }); 
    
   
    this.areasByVersion = null;
  }

  loadAreasByVersion()
  {
   this.areasByVersion = this.areaService.areasByVersion(this.selected.Standard.versions[0].id).toPromise();
  }
  deleteParameter(parameterId:string){
    this.client.deleteParameter(parameterId).subscribe(x=>{
      this.loadStandard();
    });
  }
  showDialogMaterilVolumes(parameterId:string) {
    this.dialogFlag = true;
    this.currentParameterId =  parameterId;
  }
  hideDialogMaterilVolumes()
  {
    this.dialogFlag = false;
  }
  addParam() {
      this.newParam.versionId = this.selected.Standard.versions[0].id; 
      this.client.addParamter(this.newParam).subscribe(x=>{
        this.loadStandard();
        this.toggleDialogAddParam();
      });
  }
  toggleDialogAddParam() {
    this.paramDialogFlag = !this.paramDialogFlag; 
  }

}


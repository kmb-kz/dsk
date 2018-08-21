import { Component, OnInit, Input } from '@angular/core';
import { Nsi } from '../../../../../../../services/models/models';
import { NsiService } from '../../../../../../../services/nsi.service';
import { CnsAnswerService } from '../../../../../../../services/cns/cns-answer.service';

@Component({
  selector: 'app-cns-point-materials',
  templateUrl: './cns-point-materials.component.html',
  styleUrls: ['./cns-point-materials.component.css']
})
export class CnsPointMaterialsComponent implements OnInit {

  @Input() parameterId: string;
  newMaterialVolume: MaterialVolumePost = new MaterialVolumePost();
  @Input() materials: Nsi[];
  materialVolumes: MaterialVolume[];
  showAddDialogFlag: boolean = false;

  constructor(private nsi: NsiService, private answerService: CnsAnswerService) { }

  ngOnInit() {



  }

  ngOnChanges() {
    this.loadMaterialVolumes();
  }
  showDialodAdd() {
    if (this.showAddDialogFlag)
      this.showAddDialogFlag = false;
    else
      this.showAddDialogFlag = true;
  }
  add() {
    this.newMaterialVolume.parameterId = this.parameterId;
    this.answerService.materialVolumePost(this.newMaterialVolume).subscribe(x => {
      this.loadMaterialVolumes();
    });

  }
  loadMaterialVolumes() {

    if (this.parameterId != null)
      this.answerService.materialVolumes(this.parameterId).subscribe(
        x => {
          if (x.success) {
            this.materialVolumes = x.result;
            //console.log(this.materialVolumes);
          }
        });
  }

  removeMaterials($event) {
    
    this.loadMaterialVolumes();
  }


}

export class MaterialVolumePost {
  parameterId: string;
  materialId: string;
  volume: number;
}
export class MaterialVolumePut {
  id: string;
  volume: number;
}
export class MaterialVolume {
  id: string;
  material: Nsi;
  volume: number;
}
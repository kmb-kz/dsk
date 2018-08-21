import {Component, OnInit, Input} from '@angular/core';
import {
  CnsEditVolumeService, MaterialCostsAddModel, MaterialCostsModel, MaterialCostsUpdateModel
} from '../../../services/cns/cns-edit-volume.service';

import {ConstructiveModel} from '../../../services/models/cns/cnsConstructiveModel';
import {DictionaryModel} from '../../../services/models/cns/cnsDictionaryModel';
import {isNullOrUndefined, isUndefined} from 'util';

@Component({
  moduleId: module.id,
  selector: 'app-edit-volume',
  templateUrl: './edit-volume.component.html',
  styleUrls: ['./edit-volume.component.css']
})
export class EditVolumeComponent implements OnInit {
  hideAddWin = true;

  cnsMaterialCostList: MaterialCostsModel[];
  cnsMaterialCostRequest = new MaterialCostsAddModel();
  constructiveList: ConstructiveModel[];
  constructiveSel: ConstructiveModel;
  materialList: DictionaryModel[];
  materialSel: DictionaryModel;
  mKeyList: DictionaryModel[];
  mKeySel: DictionaryModel;
  constructiveTypeSel: DictionaryModel;
  constructiveTypeList: DictionaryModel[];
  selRec: MaterialCostsModel;
  matUpdate = new MaterialCostsUpdateModel();
  errorMessage = '';
  constructiveTypeShow = false;


  constructor(private service: CnsEditVolumeService) {
  }

  ngOnInit() {
    this.getMaterialCostList();
    this.getConstructiveList();
    this.getMaterialList();
    this.getMKeyList();
  }

  getMaterialCostList() {
    this.service.getMaterialCosts().subscribe(
      (data: MaterialCostsModel[]) => {
        this.cnsMaterialCostList = data['result'];
      }
    );
  }

  getConstructiveList() {
    this.service.getConstructives().subscribe(
      (data: ConstructiveModel[]) => {
        this.constructiveList = data['result'];
      },
      error2 => {
        console.log(error2);
      });
  }

  getMaterialList() {
    this.service.getMaterials().subscribe(
      (data: DictionaryModel[]) => {
        this.materialList = data['result'];
      },
      error2 => {
        console.log(error2);
      });
  }

  getMKeyList() {
    this.service.getMKeys().subscribe(
      (data: DictionaryModel[]) => {
        this.mKeyList = data['result'];
      },
      error2 => {
        console.log(error2);
      });
  }

  selConstructiveM(val: any) {
    this.constructiveTypeList = null;
    this.service.getConstructiveTypes(val).subscribe(
      (data: DictionaryModel[]) => {
        this.constructiveTypeList = data['result'];
        if ((!isNullOrUndefined(this.constructiveTypeList)) && (this.constructiveTypeList.length > 0)) {
          this.constructiveTypeShow = true;
        } else {
          this.constructiveTypeShow = false;
        }
      },
      error2 => {
        console.log(error2);
      });
  }

  add() {

  }
  edit() {
    this.selConstructiveM(this.selRec.constructiveId);
  }

  saveMaterialCosts() {
    // let cnsMaterialCostList = this.cnsMaterialCostList;

    // let request = new MaterialCostsAddModel();
    // request.ConstructiveId = constructiveId;
    // request.ConstructiveTypeId = constructiveTypeId;
    // request.Costs = costs;
    // request.MaterialId = materialId;
    // request.MKeyId = mkeyId;
    this.service.saveMaterialCosts(this.cnsMaterialCostRequest).subscribe((data: MaterialCostsModel) => {
      // cnsMaterialCostList.push(data['result']);
      //
      // this.cnsMaterialCostList = cnsMaterialCostList;
      // this.cnsMaterialCostRequest.ConstructiveId = null;
      // this.cnsMaterialCostRequest.ConstructiveTypeId = null;
      // this.cnsMaterialCostRequest.Costs = null;
      // this.cnsMaterialCostRequest.MaterialId = null;
      // this.cnsMaterialCostRequest.MKeyId = null;
      this.getMaterialCostList();
      this.hideAddWin = true;
    });
  }

  updateMaterialCosts() {
    let rec = new MaterialCostsUpdateModel();
    rec.Id = this.selRec.id;
    rec.ConstructiveId = this.selRec.constructiveId;
    rec.ConstructiveTypeId = this.selRec.constructiveTypeId;
    rec.MaterialId = this.selRec.materialId;
    rec.MKeyId = this.selRec.mKeyId;
    rec.Costs = this.selRec.costs;
    this.service.updateMaterialCosts(rec).subscribe(data => {
      this.getMaterialCostList();
    });
  }

  deleteMaterialCosts() {
    this.service.deleteMaterialCosts(this.selRec.id).subscribe(data => {
        this.getMaterialCostList();
      }
    );
  }

}

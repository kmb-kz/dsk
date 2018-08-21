import { Component, OnInit } from '@angular/core';
import { CnsArea, CnsAreaService } from '../../../../services/cns/cns-area.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/common/auth.service';
import { RpmConstructivesService } from '../../../../services/rpm/rpm-constructives.service';
import { RpmRemarkService } from '../../../../services/rpm/rpm-remark.service';
import { Nsi } from '../../../../services/models/models';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';
import { RpmAreaPartsService } from '../../../../services/rpm/rpm-area-parts.service';
import { SelectedParent } from '../../../../services/models/ppo/fixCL/selected-parent.model';
import { Parent } from '../../../../services/models/ppo/fixCL/parent.model';
import { RpmFixChecklistService, FixCl } from '../../../../services/rpm/rpm-fix-checklist.service';
import { RpmObjectService } from '../../../../services/rpm/rpm-object.service';

@Component({
  selector: 'app-rpm-fix-checklist',
  templateUrl: './rpm-fix-checklist.component.html',
  styleUrls: ['./rpm-fix-checklist.component.css'],
  providers: [RpmFixChecklistService]
})
export class RpmFixChecklistComponent implements OnInit {

  areaId: string;
  areaParts: any[];
  area: Promise<CnsArea>;
  areaPartId: string;
  itemsList: Nsi[];
  selectedParent: SelectedParent;
  checkList: FixCl;
  detour: any;
  constructiveId: string;
  indexIn: number;

  constructor(private route: ActivatedRoute, private serviceArea: CnsAreaService,
    private serviceConst: RpmConstructivesService, private serviceRpmRemark: RpmRemarkService,
    private serviceAreaPart: RpmAreaPartsService, private serviceFix: RpmFixChecklistService,
    private serviceAreaRpm: RpmObjectService,
    private toaster: ToasterComponent, public auth: AuthService) { }

  ngOnInit() {

    this.areaId = this.route.snapshot.paramMap.get('id');
    this.area = this.serviceArea.area(this.areaId).toPromise();
    this.loadAreaParts(this.areaId, '');
    this.addDetour();
    //this.getDetour();
    this.getAreaConstructives();
  }


  addDetour() {
    this.serviceAreaRpm.addDetourArea(this.areaId).subscribe(
      i => {
        if (i.success) {
          this.getDetour();
        } else {
          this.getDetour();
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
  }

  getAreaConstructives() {
    this.serviceConst.getAreaConstructives(this.areaId).subscribe(
      data => {
        if (data.success) {
          this.itemsList = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  loadAreaParts(id: string, parentId?: string) {
    this.serviceRpmRemark.getAreaParts(parentId, id).subscribe(
      data => {
        if (data.success) {
          this.areaParts = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getDetour() {
    this.serviceFix.getDetour(this.areaId).subscribe(
      i => {
        if (i.success) {
          this.detour = i.result;
        }
      });
  }

  changeAreaPart() {
    localStorage.setItem('rpm-clf-last-areaPartId', this.areaPartId);
    this.serviceAreaPart.getAreaPartConstructive(this.areaPartId).subscribe(
      i => {
        if (i.success) {
          this.itemsList = i.result;
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  changeDetour(idDetour) {

    this.serviceFix.changeDetour(idDetour).subscribe(
      i => {
        if (i.success) {
          this.detour = i.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', i.message);
        }
      }
    );
  }



  selectedInfo(id: string, index, detour: number) {
    this.constructiveId = id;
    this.indexIn = index;
    this.serviceFix.getAnswers(this.areaId, id, detour).then(
      i => {
        this.checkList = new FixCl();
        this.checkList = i;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RpmObject, RpmAddObject, LLC } from '../../../../../services/models/rpm/rpm-object.model';
import { RpmObjectService } from '../../../../../services/rpm/rpm-object.service';
import { AuthService } from '../../../../../services/common/auth.service';
import { CnsAreaService } from '../../../../../services/cns/cns-area.service';

@Component({
  selector: 'app-rpm-area',
  templateUrl: './rpm-area.component.html',
  styleUrls: ['./rpm-area.component.css']
})
export class RpmAreaComponent implements OnInit {

  rpmObject: Observable<RpmObject[]>;
  role: string;
  descObject: string;
  nameObject: string;
  visableAddObject = false;
  objectForm: FormGroup;
  addModel: RpmAddObject;
  searchTxt: string = '';
  sortType: number = 1;
  llc: string;
  llcList: Observable<LLC[]>;
  statusClickSave: boolean = false;
  constructor(private services: RpmObjectService, public auth: AuthService, private cnsAreaService: CnsAreaService) {
    this.objectForm = new FormGroup({
      'nameObject': new FormControl('', Validators.required),
      'llc': new FormControl('', Validators.required)
    });
  }

  getObjects() {
    this.rpmObject = this.services.getObjects(this.searchTxt, this.sortType);
  }
  ngOnInit() {
    this.getLLC();
    this.rpmObject = this.services.objectList();
  }
  toggleForm(): void {
    this.visableAddObject = !this.visableAddObject;
  }
  addObject(llc, nameObject, descObject) {
    this.services.setObject(llc, nameObject, descObject).subscribe(
      data => {
        this.statusClickSave = true;
        this.rpmObject = this.services.objectList();
        this.visableAddObject = false;
        this.statusClickSave = false;
      }
    );
  }
  getLLC() {
    this.llcList = this.services.getLLC();
  }
  removeArea(id: string, name: string) {
    if (confirm('Вы точно хотите удалить проект ' + name + '?')) {
      this.cnsAreaService.removeArea(id).subscribe(
        i => {
          if (i.success) {
            this.rpmObject = this.services.objectList();
          }
        }
      );
    }
  }

}

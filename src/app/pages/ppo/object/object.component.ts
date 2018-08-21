import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

import { FormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { ObjectService } from '../../../services/ppo/object.service';
import { AuthService } from '../../../services/common/auth.service';
import { CnsAreaService } from '../../../services/cns/cns-area.service';


@Component({
  moduleId: module.id,
  selector: 'app-object',
  templateUrl: 'object.component.html',
  styleUrls: ['object.component.css']
})
export class ObjectComponent implements OnInit {

  objectForm: FormGroup;
  objectList: any = [];
  visableAddObject = false;
  errorMessage = '';
  descObject: string;
  nameObject: string;
  role: string;
  public searchTxt: string = '';

  constructor(private app: AppComponent, public auth: AuthService,
    private objectService: ObjectService, private service: CnsAreaService) {
    app.setPageWithoutHeader(false);
    app.setPageWithoutSidebar(false);
    this.role = localStorage.getItem('roles');


    this.objectForm = new FormGroup({
      'nameObject': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('object-ready'));
    this.getObjects();
  }


  toggleForm(): void {
    this.visableAddObject = !this.visableAddObject;
  }

  getObjects() {
    this.objectService.getObjectList(this.searchTxt).subscribe(
      data => {
        if (data.success) {
          this.objectList = [];
          this.objectList = data.result;
        } else {
          this.errorMessage = data.message;
        }

      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );
  }
  addObject(nameObject) {
    this.objectService.setObject(nameObject).subscribe(
      data => {
        if (data.success) {
          this.objectForm.reset();
          this.objectList = [];
          this.getObjects();
          this.visableAddObject = false;
        } else {
          this.errorMessage = data.message;
        }
      },
      error => {
        this.errorMessage = 'Ошибка на стороне сервера';
      }
    );

  }


  removeArea(id: string, areaName: string) {
    if (confirm('Вы точно хотите удалить проект ' + areaName + '?')) {
      this.service.removeArea(id).subscribe(
        i => {
          if (i.success) {
            this.getObjects();
          }
        }
      );
    }
  }



}

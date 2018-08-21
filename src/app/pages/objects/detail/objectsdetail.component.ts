import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { ObjectsService } from '../../../services/objects.service';
declare var jQuery: any;
import 'rxjs/add/operator/switchMap';
import { File64 } from '../../common/file/file.component';
import { User } from '../../../services/models/user';
import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';
import { ToasterComponent } from '../../../components/toaster/toaster.component';
import { ObjectsDetailModel } from '../../../services/models/objects/objectsDetailModel';

@Component({
  moduleId: module.id,
  selector: 'app-objectdetail',
  templateUrl: 'objectsdetail.component.html',
  styleUrls: ['objectsdetail.component.css'],
  providers: [ToasterComponent]
})

export class ObjectsdetailComponent implements OnInit {

  objectList: ObjectsDetailModel;
  partnerList: any[] = [];
  leadersList: any[] = [];
  UserList: User[];
  idObject: string;
  role:string;
  errorMessage:string;
  photoUploads: File64;

  constructor(private route: ActivatedRoute, private router: Router,
    private service: ObjectsService, private toaster: ToasterComponent) {

  }

  ngOnInit() {
    this.idObject = this.route.snapshot.paramMap.get('id');
    this.role = localStorage.getItem('roles');
    this.getObject(this.idObject);
   
    this.getUsers(this.idObject);
  }

  chekObject(){
    if(this.objectList == null) {
      this.toaster.popToast('error', 'Внимание!', 'Нет такого обьекта!');
      this.router.navigate(['/objects']);
    }
  }
  getObject(Id?: string) {
    this.service.getObjectsDetail(Id).subscribe(
      data => {
        if (data.success) {
          //console.log(data.result);
          this.objectList = data.result;
          this.chekObject();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getPartner(Id?: string) {
    this.service.getPartner(Id).subscribe(
      data => {
        if (data.success) {
          this.partnerList = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  getLeaders(Id?: string) {
    this.service.getLeaders(Id).subscribe(
      data => {
        if (data.success) {
          this.leadersList = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
  getUsers(Id?: string) {
    this.service.getUsers(Id).subscribe(
      data => {
        if (data.success) {
          this.UserList = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  uploadPhoto() {

    this.service.uploadPhoto(this.photoUploads,this.idObject).subscribe(
      data => {
        if (data.success) {
          this.getObject(this.idObject);
          this.toaster.popToast('success', 'Фотография загрузилась!', data.message);
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }
}

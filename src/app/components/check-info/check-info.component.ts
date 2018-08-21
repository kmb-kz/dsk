import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FixClService } from '../../services/ppo/fix-cl.service';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/common/auth.service';
import { File64 } from '../file-one/file-one.component';

@Component({
  moduleId: module.id,
  selector: 'app-check-info',
  templateUrl: 'check-info.component.html',
  styleUrls: ['check-info.component.css']
})
export class CheckInfoComponent implements OnInit {

  @Input() photos?: any[];
  @Input() commentText: string;
  @Input() typeCheckList: number;
  @Input() nameCheckList: string;
  @Output() delPhoto = new EventEmitter();
  @Input() groupFancy: number;
  @Input() statusId: number;
  displayCheckPhoto: boolean = false;
  photoId: string;
  role: string;
  photo: Array<File64>;

  constructor(private service: FixClService, public auth: AuthService, private dataService: DataService) {
    this.role = localStorage.getItem('roles');
  }

  ngOnInit() {
  }

  modalPhoto(id: string) {
    this.displayCheckPhoto = true;
    this.photoId = id;
  }

  changePhoto() {
    if (this.typeCheckList === 1) {
      this.dataService.changePhoto(this.photoId, this.photo).subscribe(
        data => {
          if (data.success) {
            this.displayCheckPhoto = false;
            this.onDelPhoto(this.photoId);
          }

        },
        error => {
          alert('Ошибка на стороне сервера');
        });
    }
    if (this.typeCheckList === 2) {
      this.service.changePhoto(this.photoId, this.photo).subscribe(
        data => {
          if (data.success) {
            this.displayCheckPhoto = false;
            this.onDelPhoto(this.photoId);
          }
        },
        error => {
          alert('Ошибка на стороне сервера');
        });
    }
  }

  removePicture(id: string) {
    if (this.typeCheckList === 1) {
      this.dataService.removePhoto(id).subscribe(
        data => {
          this.onDelPhoto(id);
        },
        error => {
          alert('Ошибка на стороне сервера');
        }
      );
    }

    if (this.typeCheckList === 2) {
      this.service.removePhoto(id).subscribe(
        data => {
          this.onDelPhoto(id);
        },
        error => {
          alert('Ошибка на стороне сервера');
        }
      );
    }
  }

  hideCheckDialogPhoto() {
    this.displayCheckPhoto = false;
  }

  onDelPhoto(id) {
    this.delPhoto.emit(id);
  }

}

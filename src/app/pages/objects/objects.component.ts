import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ObjectsModel } from '../../services/models/objects/objectsModel';
import { ObjectsService } from '../../services/objects.service';
import { Nsi } from '../../services/models/models';
import { ToasterComponent } from '../../components/toaster/toaster.component';
import { NsiService } from '../../services/nsi.service';
import { ImageLazyLoadModule, WebWorkerService } from 'ng2-image-lazy-load';

@Component({
  moduleId: module.id,
  selector: 'app-objects',
  templateUrl: 'objects.component.html',
  styleUrls: ['objects.component.css'],
  providers: [ToasterComponent]
})
export class ObjectsComponent implements OnInit {

  objectList: ObjectsModel[];
  searchTxt = '';
  statusModel = 0;
  areaStatus: Promise<Nsi[]>;

  constructor(private service: ObjectsService, private toaster: ToasterComponent,
    private nsiService: NsiService) {
    this.statusModel = null;
  }

  ngOnInit() {
    this.resultSearch(this.searchTxt, 2);
    this.areaStatus = this.nsiService.statusBuilding();
  }

  getObject() {
    this.resultSearch(this.searchTxt, this.statusModel);
  }

  resultSearch(searchTxt?: string, statusId?: number) {
    this.service.searchResult(searchTxt, statusId).subscribe(
      data => {
        if (data.success) {
          this.objectList = data.result;
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

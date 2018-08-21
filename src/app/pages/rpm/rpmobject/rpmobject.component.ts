import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RpmObject } from '../../../services/models/rpm/rpm-object.model';
import { RpmObjectService } from '../../../services/rpm/rpm-object.service';
import { AppComponent } from '../../../app.component';

@Component({
  moduleId: module.id,
  selector: 'app-rpmobject',
  templateUrl: 'rpmobject.component.html',
  styleUrls: ['rpmobject.component.css']
})
export class RpmobjectComponent implements OnInit {

  rpmObject: Observable<RpmObject[]>;
  searchTxt: string = '';
  sortType: number = 1;
  constructor(private app:AppComponent, private services: RpmObjectService) { 
    app.setPageWithoutSidebar(false);
    app.setPageWithoutHeader(false);
  }

  ngOnInit() {
    this.rpmObject = this.services.objectList();
   
  }
  getObjects() {
    this.rpmObject = this.services.getObjects(this.searchTxt, this.sortType);
  }
}

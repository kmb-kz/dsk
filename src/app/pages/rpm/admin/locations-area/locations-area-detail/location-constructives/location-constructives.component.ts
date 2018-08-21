import { Component, OnInit } from '@angular/core';
import { Nsi } from '../../../../../../services/models/models';
import { RpmConstructivesService, ConfirmedModel } from '../../../../../../services/rpm/rpm-constructives.service';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';
import { DualListComponent } from 'angular-dual-listbox';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-location-constructives',
  templateUrl: 'location-constructives.component.html',
  styleUrls: ['location-constructives.component.css']
})

export class LocationConstructivesComponent implements OnInit {
  constructives: Nsi[];
  areaConstructive: Nsi[];
  selectedConstructive: Nsi[];
  keepSorted = true;
  key: string;
  disabled = false;
  confirmed: Array<ConfirmedModel>;
  display: string;
  filter = true;
  source: Array<any>;
  private sourceStations: Array<any>;
  private confirmedStations: Array<any>;
  idObject: string;

  constructor(private route: ActivatedRoute, private service: RpmConstructivesService, private toaster: ToasterComponent) {
    this.idObject = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.selectedConstructive = [];
    this.getConstructive();
    this.getAreaConstructive();
    this.doReset();
  }

  getConstructive() {
    this.service.getPartConstuctives().subscribe(
      data => {
        if (data.success) {
          this.constructives = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }

  snapConstructiveArea() {
    this.service.addConstructiveArea(this.confirmed, this.idObject).subscribe(
      data => {
        if (data.success) {
          this.getAreaConstructive();
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


  getAreaConstructive() {
    this.areaConstructive = [];
    this.service.getAreaConstructives(this.idObject).subscribe(
      data => {
        if (data.success) {
          this.areaConstructive = data.result;
        } else {
          this.toaster.popToast('error', 'Внимание!', data.message);
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }



  doReset() {
    this.confirmedStations = new Array<any>();
    //this.confirmedStations.push( this.stations[31] );
    this.useStations();
  }

  private useStations() {
    this.key = 'id';
    this.display = 'name';
    this.keepSorted = true;
    this.confirmed = this.confirmedStations;
  }

}

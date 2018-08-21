import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../services/common/http.service';
import { environment } from '../../../../../../environments/environment';
import { RpmObjectService } from '../../../../../services/rpm/rpm-object.service';

interface Area {
  name: string;
  id: string;
}
@Component({
  selector: 'app-rpm-report-selective',
  templateUrl: './rpm-report-selective.component.html',
  styleUrls: ['./rpm-report-selective.component.css']
})
export class RpmReportSelectiveComponent implements OnInit {
  listStyle = "flat";
  searchText: string;
  from: Date;
  to: Date;
  results: any[];
  /*areas: any[];*/
  area: any;
  parts: any[];
  part: any;
  childPart: any;
  host: string;
  selectedArea: Area[];
  selectArea: any[];
  areas: Area[];

  constructor(private servicesObject: RpmObjectService, private http: HttpService) { }

  ngOnInit() {
    this.host = environment.apiUrl;
    this.servicesObject.getObjects('', 4).subscribe(
      result => {
        this.areas = result;
      }
    );
   /* this.http.get<any[]>(environment.apiUrl + 'api/rpm/report/global/areas')
      .subscribe(i => {
        this.areas = i.map(area => {
          area.command = (event) => {
            if (event && this.area !== event.item) {
              this.area = event.item;
              this.parts = null;
              this.part = null;
              this.http.get<any[]>(environment.apiUrl + 'api/rpm/report/global/areaparts/' + this.area.data)
                .subscribe(j => {
                  this.parts = j.map(part => {
                    part.command = (event) => {
                      if (event && this.part !== event.item) {
                        this.part = event.item;
                      }
                    };
                    return part;
                  });
                });
            }
          };
          return area;
        });
      });*/
  }
  areaSelect($event) {
    this.selectArea = [];
    this.selectArea = $event.value;
  }
  search() {
    this.http.post<any[]>(environment.apiUrl + 'api/rpm/report/select',
      {
        searchText: this.searchText, from: this.from, to: this.to,
        areas: this.selectArea, areaPartId: this.childPart ? this.childPart.data : (this.part ? this.part.data : null)
      }).subscribe(res => {
        this.results = res;
      });
  }
}

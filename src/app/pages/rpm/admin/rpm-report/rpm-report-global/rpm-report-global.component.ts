import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '../../../../../services/objects.service';
import { Nsi } from '../../../../../services/models/models';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from '../../../../../services/common/http.service';
import { TreeNode } from 'primeng/primeng';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-rpm-report-global',
  templateUrl: './rpm-report-global.component.html',
  styleUrls: ['./rpm-report-global.component.css']
})
export class RpmReportGlobalComponent implements OnInit {

  areas: any[];
  selectedAreas: any[];
  constructives: any[];
  selectedConstructives: any[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get<any[]>(environment.apiUrl + 'api/rpm/report/global/areas')
      .subscribe(i => {
        this.areas = i.map(area => {
          area.isArea = true;
          area.leaf = false;
          return area;
        });
      });

    this.http.get<any[]>(environment.apiUrl + 'api/rpm/report/global/constructives')
      .subscribe(i => {
        this.constructives = i.map(constructive => {
          constructive.isConstructive = true;
          constructive.leaf = false;
          return constructive;
        });
      });
  }
  loadParts(event) {
    var node = event.node;
    if (node && !node.loaded) {
      node.loaded = true;
      var url = `${environment.apiUrl}api/rpm/report/global/${node.isArea ? "areaparts" : "childparts"}/${node.data}`;
      this.http.get<any[]>(url)
        .subscribe(i => {
          node.children = i.map(area => {
            area.leaf = false;
            return area;
          });
          if (this.selectedAreas && this.selectedAreas.filter(i => i.data == node.data).length > 0) {
            this.selectedAreas.push.apply(this.selectedAreas, node.children);
          }
          if (node.children.length == 0) {
            node.leaf = true;
          }
        });
    }
  }

  loadRemarks(event) {
    var node = event.node;
    if (node && !node.loaded) {
      node.loaded = true;
      var url = `${environment.apiUrl}api/rpm/report/global/${node.isConstructive ? "remarktypes" : "childremarktypes"}/${node.data}`;
      this.http.get<any[]>(url)
        .subscribe(i => {
          node.children = i.map(area => {
            area.leaf = false;
            return area;
          });
          if (this.selectedConstructives && this.selectedConstructives.filter(i => i.data == node.data).length > 0) {
            this.selectedConstructives.push.apply(this.selectedConstructives, node.children);
          }
          if (node.children.length === 0) {
            node.leaf = true;
          }
        });
    }
  }
  results = [];
  result() {

    let areas = this.selectedAreas.map(i => {

      let item = {
        id: i.data,
        isHead: i.isArea,
        parentId: i.parent ? i.parent.data : null
      };

      return item;

    });

    let constructives = this.selectedConstructives.map(i => {
      let item = {
        id: i.data,
        isHead: i.isConstructive,
        parentId: i.parent ? i.parent.data : null
      };
      return item;
    });
    this.http.post<any[]>(`${environment.apiUrl}api/rpm/report/global`, { areas, constructives })
      .subscribe(i => {
        this.results = i;
      })
  }
  apiUrl = environment.apiUrl;
}
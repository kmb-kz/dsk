import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpService } from '../../services/common/http.service';
import { environment } from '../../../environments/environment';
import { Nsi } from '../../services/models/models';

@Component({
  selector: 'app-part-selector',
  templateUrl: './part-selector.component.html',
  styleUrls: ['./part-selector.component.css']
})
export class PartSelectorComponent implements OnInit {
  @Output() selected: any;
  _parent: any;
  @Input() set parent(value: any) {
    this._parent = value;
    if (value && value.data) {
      this.part = null;
      var url = `${environment.apiUrl}api/rpm/report/global/childparts/${value.data}`;
      this.http.get<any[]>(url)
        .subscribe(i => {
          this.children = i.map(p => {
            p.command = (event) => {
              if (event && this.part !== event.item) {
                this.part = event.item;
                this.selected = this.part;
              }
              console.log(this.selected);
            };
            return p;
          });
        });
    }
  }
  children: any[];
  part: any;
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}

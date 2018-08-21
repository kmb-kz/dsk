import { Component, OnInit } from '@angular/core';
import { CnsArea, CnsAreaService } from '../../../services/cns/cns-area.service';
import { AuthService } from '../../../services/common/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cns-areas',
  templateUrl: './cns-areas.component.html',
  styleUrls: ['./cns-areas.component.css']
})
export class CnsAreasComponent implements OnInit {
  search: string;
  areas: Promise<CnsArea[]>;
  constructor(private service: CnsAreaService, public auth: AuthService) { }
  visableAddObject: boolean = false;
  name: string;
  host: string;
  ngOnInit() {
    this.host = environment.apiUrl;
    this.load();

  }
  load() {
    this.areas = this.service.areas().toPromise();
  }
  toggleForm(): void {
    this.visableAddObject = !this.visableAddObject;
  }

  add() {
    this.service.add(this.name, 2).subscribe(x => {
      this.toggleForm();
      this.load();
    });
  }

  removeArea(id: string, areaName: string) {
    if (confirm('Вы точно хотите удалить проект ' + areaName + '?')) {
      this.service.removeArea(id).subscribe(
        i => {
          if (i.success) {
            this.load();
          }
        }
      );
    }
  }

}

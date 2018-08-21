import { Component, OnInit } from '@angular/core';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';
import { AuthService } from '../../../services/common/auth.service';
import { OkkAreaService } from '../../../services/okk/okk-area.service';

@Component({
  selector: 'app-okk-osp',
  templateUrl: './okk-osp.component.html',
  styleUrls: ['./okk-osp.component.css'],
  providers: [OkkAreaService]
})
export class OkkOspComponent implements OnInit {

  search: string;
  areas: Promise<CnsArea[]>;
  constructor(private service: CnsAreaService, private okkService: OkkAreaService,
    public auth: AuthService) { }
  visableAddObject: boolean = false;
  name: string;

  ngOnInit() {
    this.load();
  }

  load() {
    this.areas = this.okkService.areas(7, '').toPromise();
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
}

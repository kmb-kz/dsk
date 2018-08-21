import { Component, OnInit } from '@angular/core';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';
import { AuthService } from '../../../services/common/auth.service';
import { OkkAreaService, Division } from '../../../services/okk/okk-area.service';
import { NsiService } from '../../../services/nsi.service';

@Component({
  selector: 'app-okk-finite',
  templateUrl: './okk-finite.component.html',
  styleUrls: ['./okk-finite.component.css'],
  providers: [OkkAreaService]
})
export class OkkFiniteComponent implements OnInit {

  search: string;
  areas: Promise<CnsArea[]>;
  divisions: Promise<Division[]>;
  constructor(private service: CnsAreaService,
    private okkService: OkkAreaService, private nsi: NsiService, public auth: AuthService) { }
  visableAddObject: boolean = false;
  name: string;
  divisionId: string;
  divisionSort = '';

  ngOnInit() {
    this.load();
    this.divisions = this.nsi.divisions();
  }

  load() {
    this.areas = this.okkService.areas(2, this.divisionSort).toPromise();
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

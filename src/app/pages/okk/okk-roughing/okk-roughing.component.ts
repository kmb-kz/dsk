import { Component, OnInit } from '@angular/core';
import { CnsAreaService, CnsArea } from '../../../services/cns/cns-area.service';
import { AuthService } from '../../../services/common/auth.service';
import { OkkAreaService, OkkAreaAdd, Division } from '../../../services/okk/okk-area.service';
import { NsiService } from '../../../services/nsi.service';
import { Nsi } from '../../../services/models/models';
import { ToasterComponent } from '../../../components/toaster/toaster.component';

@Component({
  selector: 'app-okk-roughing',
  templateUrl: './okk-roughing.component.html',
  styleUrls: ['./okk-roughing.component.css'],
  providers: [OkkAreaService]
})
export class OkkRoughingComponent implements OnInit {

  search: string;
  areas: Promise<CnsArea[]>;
  constructor(private service: OkkAreaService, public auth: AuthService,
    private nsi: NsiService, private toaster: ToasterComponent) { }
  visableAddObject: boolean = false;
  name: string;
  divisionId: string;
  divisionSort = '';
  divisions: Promise<Division[]>;

  ngOnInit() {
    this.load();
    this.divisions = this.nsi.divisions();
  }

  load() {
    this.areas = this.service.areas(6, this.divisionSort).toPromise();
  }
  toggleForm(): void {
    this.visableAddObject = !this.visableAddObject;
  }

  add() {
    this.service.add(this.name, this.divisionId, 6).subscribe(
      data => {
        if (data) {
          this.toggleForm();
          this.load();
        } else {
          this.toaster.popToast('error', 'Внимание!', 'Ошибка при добавлении проекта');
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      }
    );
  }


}

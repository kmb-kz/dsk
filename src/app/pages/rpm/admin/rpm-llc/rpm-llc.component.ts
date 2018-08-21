import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable } from 'primeng/primeng';
import { RpmObjectService } from '../../../../services/rpm/rpm-object.service';
import { Observable } from 'rxjs/Observable';
import { LLC } from '../../../../services/models/rpm/rpm-object.model';
import { ToasterComponent } from '../../../../components/toaster/toaster.component';

@Component({
  selector: 'app-rpm-llc',
  templateUrl: './rpm-llc.component.html',
  styleUrls: ['./rpm-llc.component.css']
})
export class RpmLlcComponent implements OnInit {

  llc: any[] = [];
  loading: boolean;
  height: string;
  selectedLLC: LLC;
  @ViewChild('dt') dt: DataTable;
  modelLLC: LLC = new LLC();

  constructor(private services: RpmObjectService, private toaster: ToasterComponent) {
    this.height = (window.screen.height - 300) + 'px';
  }


  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getLlc();
      this.loading = false;
    }, 1000);

  }


  getLlc() {
    this.services.getLLC().subscribe(
      i => {
        this.llc = i;
      });

  }


  saveLLC() {
    this.loading = true;
    this.services.addLLC(this.modelLLC).subscribe(
      i => {
        if (i.success) {
          this.getLlc();
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
    this.loading = false;
  }


  editLLC() {
    this.loading = true;
    this.services.editLLC(this.modelLLC).subscribe(
      i => {
        if (i.success) {
          this.getLlc();
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
    this.loading = false;
  }

  remove(id: string) {
    this.loading = true;
    this.services.removeLLC(id).subscribe(
      i => {
        if (i.success) {
          this.getLlc();
        }
      },
      error => {
        this.toaster.popToast('error', 'Внимание!', 'Ошибка на стороне сервера');
      });
    this.loading = false;
  }
}

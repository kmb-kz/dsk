import { Component, OnInit } from '@angular/core';
import { RpmReportService } from '../../../services/rpm/rpm-report.service';


@Component({
  selector: 'app-rpm-gmo',
  templateUrl: './rpm-gmo.component.html',
  styleUrls: ['./rpm-gmo.component.css'],
  providers: [RpmReportService]

})
export class RpmGmoComponent implements OnInit {

  remarksA: any;
  remarksB: any;
  remarksC: any;
  remarksD: any;
  remarksE: any;
  remarksF: any;
  remarksG: any;
  constructor(private service: RpmReportService) { }

  ngOnInit() {
    this.getRemarkGM(1);
    this.getRemarkGM(2);
    this.getRemarkGM(4);
    this.getRemarkGM(5);
    this.getRemarkGM(6);
    this.getRemarkGM(7);
  }

 

  getRemarkGM(typeId: number) {
    this.service.getGMType(typeId).subscribe(
      i => {
        if (typeId === 1) {
          this.remarksA = i;
        }
        if (typeId === 2) {
          this.remarksB = i;
        }
        if (typeId === 3) {
          this.remarksC = i;
        }
        if (typeId === 4) {
          this.remarksD = i;
        }
        if (typeId === 5) {
          this.remarksE = i;
        }
        if (typeId === 6) {
          this.remarksF = i;
        }
        if (typeId === 7) {
          this.remarksG = i;
        }

      }
    );
  }



  // getRemarksA() {
  //   this.service.getRemarksA().subscribe(
  //     i => {
  //       if (i.success) {
  //         this.remarks = i.result;
  //       }
  //     }
  //   );
  // }

  // getRemarksB() {
  //   this.service.getRemarksB().subscribe(
  //     i => {
  //       if (i.success) {
  //         this.remarks = i.result;
  //       }
  //     }
  //   );
  // }

  // getRemarksC() {
  //   this.service.getRemarksC().subscribe(
  //     i => {
  //       if (i.success) {
  //         this.remarks = i.result;
  //       }
  //     }
  //   );
  // }

  // getRemarksD() {
  //   this.service.getRemarksD().subscribe(
  //     i => {
  //       if (i.success) {
  //         this.remarks = i.result;
  //       }
  //     }
  //   );
  // }


}

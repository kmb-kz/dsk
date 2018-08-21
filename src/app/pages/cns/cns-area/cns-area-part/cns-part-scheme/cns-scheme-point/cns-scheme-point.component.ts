import { Component, OnInit, Input } from '@angular/core';
import { CnsPoint, CnsAreaService } from '../../../../../../services/cns/cns-area.service';
import { CnsAnswerService, CnsCheckOrder, CnsCheckOrderStandardParameter } from '../../../../../../services/cns/cns-answer.service';
import { ActivatedRoute } from '@angular/router';
import { CnsPartSchemeComponentModel } from '../cns-part-scheme.component';
import { NsiService } from '../../../../../../services/nsi.service';
import { AreaService } from '../../../../../../services/std/area.service';
import { Nsi } from '../../../../../../services/models/models';
import { AuthService } from '../../../../../../services/common/auth.service';
import { Stage, CnsConstructiveService } from '../../../../../../services/cns/cns-constructive.service';


@Component({
  selector: 'app-cns-scheme-point',
  templateUrl: './cns-scheme-point.component.html',
  styleUrls: ['./cns-scheme-point.component.css']
})
export class CnsSchemePointComponent implements OnInit {
  steps: CnsCheckOrder[] = [];
  stages: Stage[];
 
  constructor(private route: ActivatedRoute, private service: CnsAnswerService,
    private areaService: CnsAreaService, public auth: AuthService,
    public schemeModel: CnsPartSchemeComponentModel, private nsi: NsiService, private constructiveService: CnsConstructiveService ) { }
   
  ngOnInit() {
    this.schemeModel.PointId = this.route.snapshot.paramMap.get('id');
    this.service.answers(this.schemeModel.PointId).subscribe(i => {
      this.steps = i;
    });
    if (!this.schemeModel.SelectedPoint || this.schemeModel.SelectedPoint.id != this.schemeModel.PointId) {
      this.areaService.point(this.schemeModel.PointId).subscribe(i => 
      {  
        this.schemeModel.SelectedPoint = i
        this.constructiveService.getStages(this.schemeModel.SelectedPoint.constructive.id).subscribe(x=>{
          this.stages = x.result;
        });
      }
      );
    }
  
  
  }
  sumPercentage() {
    var total = 0;
    this.steps.forEach(step => {
      step.standards.forEach(standard => {
        standard.parameters.forEach(p => {
          total += p.percentage;
        });
      });
    });
    return total;
  }
  done(step: CnsCheckOrder): string {
    var total = 0, done = 0;

    step.standards.forEach(standard => {
      standard.parameters.forEach(p => {
        total += p.percentage;
      });
      standard.parameters.filter(i => i.answer && i.answer.answerType && i.answer.answerType.id == '1').forEach(p => {
        done += p.percentage;
      });
    });

    return (total == 0 ? 100 : done * 100 / total).toFixed(0);
  }
 
}

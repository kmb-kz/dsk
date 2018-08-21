import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../../../services/std/template.service';
import { Nsi } from '../../../../services/models/models';
import { NsiService } from '../../../../services/nsi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-standardtemplateedit',
  templateUrl: './standardtemplateedit.component.html',
  styleUrls: ['./standardtemplateedit.component.css']
})
export class StandardtemplateeditComponent implements OnInit {
  template = new TemplateViewModel();
  constructives: Promise<Nsi[]>;
  standards: Promise<Nsi[]>;
  constructor(private service: TemplateService, private nsi: NsiService, private router: Router, private route: ActivatedRoute) {
    this.constructives = nsi.constructives();
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != '0'){
      var initial = this.service.get(id).toPromise();
      initial.then(i=>{
        this.template.id = i.id;
        this.template.title = i.title;
        i.standards.forEach(s => {
          var standard = new TemplateStandardViewModel(this.nsi);
          standard.constructiveId = s.constructiveId;
          standard.standardId = s.id;
          standard.constructives = this.constructives;
          standard.constructives.then(i => {
            standard.updateStandards(standard.constructiveId);
          });
          this.template.standards.push(standard);
        });
      });
    }
  }
  constructiveChange(value: string) {
    this.standards = null;
    if (value) {
      this.standards = this.nsi.constractiveStandards(value);
    }
  }
  save() {
    var model = {
      id: this.template.id,
      title: this.template.title,
      standards: this.template.standards.map(i => i.standardId)
    };
    this.service.save(model).subscribe(i => {
      this.router.navigate(['/std/template', i]);
    })
  }
  addStandard() {
    var standard = new TemplateStandardViewModel(this.nsi);
    standard.constructives = this.constructives;
    standard.constructives.then(i => {
      standard.constructiveId = i[0].id;
      standard.updateStandards(standard.constructiveId);
    });
    this.template.standards.push(standard);
  }
}

class TemplateViewModel {
  id: string;
  title: string;
  standards: TemplateStandardViewModel[] = [];
}
class TemplateStandardViewModel {
  constructor(private nsi: NsiService) { }
  constructives: Promise<Nsi[]>;
  constructiveId: string;
  standards: Promise<Nsi[]>;
  standardId: string;
  updateStandards(value: string) {
    this.standards = this.nsi.constractiveStandards(value);
    this.standards.then(i => {
      if (i.length > 0 && !this.standardId)
        this.standardId = i[0].id;
    });
  }
}
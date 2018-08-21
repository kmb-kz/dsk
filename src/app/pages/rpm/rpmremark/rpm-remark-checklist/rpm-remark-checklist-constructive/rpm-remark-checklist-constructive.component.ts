import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RpmRemarkService } from '../../../../../services/rpm/rpm-remark.service';
import { ToasterComponent } from '../../../../../components/toaster/toaster.component';

@Component({
  moduleId: module.id,
  selector: 'app-rpm-remark-checklist-constructive',
  templateUrl: './rpm-remark-checklist-constructive.component.html',
  styleUrls: ['./rpm-remark-checklist-constructive.component.css']
})
export class RpmRemarkChecklistConstructiveComponent implements OnInit {

  @Input() remark: any;
  @Input() answerListId: string;
  @Input() breakdown: any[];

  areaId: string;
  constructor(private route: ActivatedRoute) {
    this.areaId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

  }


}

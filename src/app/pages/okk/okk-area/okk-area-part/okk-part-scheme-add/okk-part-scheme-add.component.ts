import { Component, OnInit } from '@angular/core';
import { CnsAreaComponentModel } from '../../../../cns/cns-area/cns-area.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { environment } from '../../../../../../environments/environment';
import { File64 } from '../../../../common/file/file.component';

@Component({
  selector: 'app-okk-part-scheme-add',
  templateUrl: './okk-part-scheme-add.component.html',
  styleUrls: ['./okk-part-scheme-add.component.css']
})
export class OkkPartSchemeAddComponent implements OnInit {

  model: any = {};
  initImage: string;
  title: string;
  isDisabled: boolean = false;
  constructor(private areaModel: CnsAreaComponentModel, private service: CnsAreaService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    var id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.model.id = id;
      this.service.scheme(id).subscribe(i => {
        this.model.title = i.title;
        var image = new File64();
        this.initImage = environment.apiUrl + i.schemeUrl;
        image.base64String = environment.apiUrl + i.schemeUrl;
        image.fileName = 'Схема';
        this.model.image = image;
      })
    }
  }
  save() {
    this.isDisabled = true;
    this.model.partId = this.areaModel.PartId;
    if (!this.model.id && !this.model.image)
      return;
    if (this.model.image.base64String == this.initImage) {
      this.model.image = null;
    }
    this.service.schemePost(this.model).subscribe(i => {
      if (i) {
        this.router.navigate([!this.model.id ? "../" : "../../", i], { relativeTo: this.route })
      }
    });
  }

}

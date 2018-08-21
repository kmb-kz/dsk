import { Component, OnInit } from '@angular/core';
import { File64 } from '../../../../common/file/file.component';
import { CnsAreaComponentModel } from '../../cns-area.component';
import { CnsAreaService } from '../../../../../services/cns/cns-area.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-cns-part-scheme-add',
  templateUrl: './cns-part-scheme-add.component.html',
  styleUrls: ['./cns-part-scheme-add.component.css']
})
export class CnsPartSchemeAddComponent implements OnInit {
  model: any = {};
  initImage: string;
  title: string;
  constructor(private areaModel: CnsAreaComponentModel, private service: CnsAreaService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    var id = this.route.snapshot.paramMap.get('id');
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

    //alert(this.model.image.length);
    /*if (this.model.image.File64 === undefined) {
      alert('Вы не выбрали файл');
      return;
    }*/
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

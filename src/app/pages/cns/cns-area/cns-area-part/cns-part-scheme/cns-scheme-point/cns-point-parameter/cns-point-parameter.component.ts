import { Component, OnInit, Input } from '@angular/core';
import { CnsPartSchemeComponentModel } from '../../cns-part-scheme.component';
import { CnsAnswerService, CnsCheckOrderStandardParameter, CnsAnswer, CnsAnswerMessage } from '../../../../../../../services/cns/cns-answer.service';
import { ActivatedRoute } from '@angular/router';
import { Nsi } from '../../../../../../../services/models/models';
import { File64 } from '../../../../../../common/file/file.component';
import { environment } from '../../../../../../../../environments/environment';
import { AuthService } from '../../../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-point-parameter',
  templateUrl: './cns-point-parameter.component.html',
  styleUrls: ['./cns-point-parameter.component.css']
})
export class CnsPointParameterComponent implements OnInit {
  @Input() parameter: CnsCheckOrderStandardParameter;
  @Input() standardId: string;
  @Input() materials: string; 

  newImages: File64[];
  newcomment: string;
  detailed = false;
 
  detailsDownloaded: number;
  innerWidth: number; 

  constructor(private schemeModel: CnsPartSchemeComponentModel, private service: CnsAnswerService,
    private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  
  loadDetails() {
    this.detailed = true;
    if (!this.detailsDownloaded) {
      this.detailsDownloaded = 0;
      this.service.answer(this.parameter.answer.id).subscribe(i => {
        i.images = i.images.map(i => {
          i.name = environment.apiUrl + i.name
          return i;
        });
        i.messages = i.messages.map(i => {
          i.image = i.image ? environment.apiUrl + i.image : null;
          return i;
        });
        this.newcomment = i.comment;
        this.parameter.answer = i;
        this.detailsDownloaded = 1;
      });
    }
  }
  newImageChange($event): void {
    var file: File = $event.target.files[0];
    if (file) {
      var myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        var model = new File64();
        model.base64String = myReader.result.split(',')[1];
        model.fileName = file.name;
        model.size = file.size;
        if (!this.parameter.answer.images)
          this.parameter.answer.images = [];
        var image = new Nsi();
        image.name = myReader.result;
        this.parameter.answer.images.push(image);
        $event.target.value = '';
        this.service.addImage(this.parameter.answer.id, model).subscribe(id => {
          image.id = id;
        })
      }
      myReader.onerror = e => {
        console.log(e);
      }
      myReader.readAsDataURL(file);
    }
  }
  removeImage(i: number) {
    this.service.removeImage(this.parameter.answer.images[i].id).subscribe(i => { });
    this.parameter.answer.images.slice(i, 1);
    return false;
  }
  answerSave(answer: string) {
    this.service.answerSave(this.standardId, this.schemeModel.PointId, this.parameter.parameter.id, answer).subscribe(i => {
      if (!this.parameter.answer) {
        this.parameter.answer = new CnsAnswer();
        this.parameter.answer.images = [];
        this.parameter.answer.messages = [];
        this.parameter.answer.answerType = new Nsi();
      }
      this.parameter.answer.id = i;
      this.parameter.answer.answerType.id = answer;
      this.loadDetails();
    });
  }
  commentSave(){
    this.service.saveComment(this.parameter.answer.id, this.newcomment).subscribe(i => {
      
    });
    this.parameter.answer.comment = this.newcomment;
  }
 
 
}

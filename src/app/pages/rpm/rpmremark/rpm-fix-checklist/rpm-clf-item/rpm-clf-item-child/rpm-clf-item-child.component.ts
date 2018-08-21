import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FixCLItems, RpmCheckPostModel, RpmFixChecklistService } from '../../../../../../services/rpm/rpm-fix-checklist.service';
import { AuthService } from '../../../../../../services/common/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterComponent } from '../../../../../../components/toaster/toaster.component';
declare var jQuery: any;
@Component({
  selector: 'app-rpm-clf-item-child',
  templateUrl: './rpm-clf-item-child.component.html',
  styleUrls: ['./rpm-clf-item-child.component.css']
})
export class RpmClfItemChildComponent implements OnInit {

  @Input() children: FixCLItems;
  displayCheck: boolean = false;
  checkModel: RpmCheckPostModel = new RpmCheckPostModel();
  areaId: string;
  @Input() detour: any;

  constructor(public auth: AuthService, private route: ActivatedRoute,
    private service: RpmFixChecklistService, private toaster: ToasterComponent) { }

  ngOnInit() {
    this.areaId = this.route.snapshot.paramMap.get('id');
  }

  showCheckDialog(answerId) {
    this.checkModel.answerTypeId = answerId;
    this.displayCheck = true;
    jQuery("#checkedModal").modal('show');
  }

  hideCheckDialog() {
    this.displayCheck = false;
  }

  checkAnswer() {

    if (this.checkModel.answerTypeId == '3') {
      if (this.checkModel.files.length == 0) {
        this.toaster.popToast('error', 'Внимание!', 'Не все поля заполнены');
        return;
      }
    }
    //|| this.checkModel.comment == undefined
    if (this.checkModel.answerTypeId == '2') {
      if (this.checkModel.files.length == 0) {
        this.toaster.popToast('error', 'Внимание!', 'Не все поля заполнены');
        return;
      }
    }




    this.checkModel.areaId = this.areaId;
    this.checkModel.areaPartId = localStorage.getItem('rpm-clf-last-areaPartId');
    this.checkModel.constructiveId = this.children['constructive']['id'];


    this.service.setAnswers(this.checkModel).then(
      i => {
        this.service.getItem(i).subscribe(
          d => {
            if (this.children.answers == null) {
              this.children = d;
              this.displayCheck = false;
            } else {
              this.children.answers.answerId = d.answers.answerId;
              this.children.answers.answerType = d.answers.answerType;
              this.children.answers.comment = d.answers.comment;
              this.children.answers.id = d.answers.id;
              this.children.answers.dateCreated = d.answers.dateCreated;
              this.children.answers.images = d.answers.images;
              this.displayCheck = false;
            }
          });

      });


  }

  checkAnswers(answerId) {
    this.checkModel.answerTypeId = answerId;
    this.checkAnswer();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CnsAnswerMessage, CnsAnswerService } from '../../../../../../../../services/cns/cns-answer.service';
import { ViewChild } from '@angular/core/src/metadata/di';
import { File64 } from '../../../../../../../common/file/file.component';
import { AuthService } from '../../../../../../../../services/common/auth.service';

@Component({
  selector: 'app-cns-parameter-chat',
  templateUrl: './cns-parameter-chat.component.html',
  styleUrls: ['./cns-parameter-chat.component.css']
})
export class CnsParameterChatComponent implements OnInit {
  @Input() messages: CnsAnswerMessage[];
  @Input() id: string;
  @Input() readOnly: boolean = false;
  constructor(private service: CnsAnswerService, public auth: AuthService) { }

  ngOnInit() {
    console.log(this.messages);
    if (this.messages)
      this.messages = this.messages.sort((a, b) => {
        if (a.date > b.date)
          return 1;
        return -1;
      });
  }

  message: string;
  chatImage: File64;
  sendMessage() {
    if (this.chatImage || this.message) {
      var newMessage = new CnsAnswerMessage();
      newMessage.date = new Date();
      newMessage.message = this.message;
      newMessage.userId = this.auth.userId();
      if (this.chatImage)
        newMessage.image = this.chatImage.base64String;

      this.service.messageSend(this.id, this.message, this.chatImage).subscribe(i => {
        newMessage.id = i;
      });
      this.message = null;
      this.chatImage = null;
      this.messages.push(newMessage);
    }
  }
  chatImageChange($event): void {
    var file: File = $event.target.files[0];
    if (file) {
      var myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.chatImage = new File64();
        this.chatImage.base64String = myReader.result;
        this.chatImage.fileName = file.name;
        this.chatImage.size = file.size;
        $event.target.value = '';
      }
      myReader.onerror = e => {
        console.log(e);
      }
      myReader.readAsDataURL(file);
    }
  }
}

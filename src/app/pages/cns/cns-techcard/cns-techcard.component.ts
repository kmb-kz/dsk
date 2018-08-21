import { Component, OnInit, Pipe, Sanitizer } from '@angular/core';
import { Area, AreaService } from '../../../services/std/area.service';
import { CnsAreaService, CnsArea, TechCard, TechCardPost } from '../../../services/cns/cns-area.service';

@Component({
  selector: 'app-cns-techcard',
  templateUrl: './cns-techcard.component.html',
  styleUrls: ['./cns-techcard.component.css'],
})
export class CnsTechcardComponent implements OnInit {

  public innerWidth: any;
  public innerHeight: any;

  areas: CnsArea[];
  techCards: TechCard[];
  techCard: TechCard = new TechCard();
  newTechCard: TechCardPost = new TechCardPost();
  flagAddModal: boolean;
  selectedAreaId: string = '';
  selectedTechCardId: string = '';


  constructor(private areaService: CnsAreaService) {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.areaService.areas().subscribe(x => {
      this.areas = x;
    });

  }

  loadTechCards() {
    this.areaService.techCards(this.selectedAreaId).subscribe(x => {
      this.techCards = x;
    });
  }

  loadTechCard() {
    this.areaService.techCard(this.selectedTechCardId).subscribe(x => {
      this.techCard = x;
      this.techCard.urlHtml = "<iframe src='" + this.techCard.urlStrip + "' width='" + (innerWidth - 300) + "' height='" + (innerHeight - 150) + "' frameborder='0'></iframe>";
    });
  }

  saveTechCard() {
    this.areaService.saveTechCard(this.newTechCard).subscribe(x => {
      this.showAddModal(false);
      this.loadTechCards();
    });
  }
  remove() {
    this.areaService.removeTechCard(this.selectedTechCardId).subscribe(x => {
      this.loadTechCards();

    })
  }
  showAddModal(isShow: boolean) {
    this.flagAddModal = isShow;
  }

}


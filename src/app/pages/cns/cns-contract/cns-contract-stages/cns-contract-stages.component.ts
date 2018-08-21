import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnsPartnerService, StageVolume } from '../../../../services/cns/cns-partner.service';

@Component({
  selector: 'app-cns-contract-stages',
  templateUrl: './cns-contract-stages.component.html',
  styleUrls: ['./cns-contract-stages.component.css']
})
export class CnsContractStagesComponent implements OnInit {

  @Input() contractId: string; 

  stagesVolume: StageVolume[];
  constructor(private route: ActivatedRoute, private router: Router,
    private service: CnsPartnerService) { }

  ngOnInit() {
    this.loadData();
  }
  ngOnChanges()
  {
    this.loadData();
  }
  loadData(){
    this.service.stagesVolume(this.contractId).subscribe(x=>{
        this.stagesVolume = x; 
    });
  }



}

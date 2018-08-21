import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsContractStagesComponent } from './cns-contract-stages.component';

describe('CnsContractStagesComponent', () => {
  let component: CnsContractStagesComponent;
  let fixture: ComponentFixture<CnsContractStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsContractStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsContractStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsContractStageComponent } from './cns-contract-stage.component';

describe('CnsContractStageComponent', () => {
  let component: CnsContractStageComponent;
  let fixture: ComponentFixture<CnsContractStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsContractStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsContractStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

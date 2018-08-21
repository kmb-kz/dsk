import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsContractConstructivesComponent } from './cns-contract-constructives.component';

describe('CnsContractConstructivesComponent', () => {
  let component: CnsContractConstructivesComponent;
  let fixture: ComponentFixture<CnsContractConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsContractConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsContractConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

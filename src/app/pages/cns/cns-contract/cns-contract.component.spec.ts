import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsContractComponent } from './cns-contract.component';

describe('CnsContractComponent', () => {
  let component: CnsContractComponent;
  let fixture: ComponentFixture<CnsContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

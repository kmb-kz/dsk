import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccStoreStepComponent } from './cns-acc-store-step.component';

describe('CnsAccStoreStepComponent', () => {
  let component: CnsAccStoreStepComponent;
  let fixture: ComponentFixture<CnsAccStoreStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccStoreStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccStoreStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

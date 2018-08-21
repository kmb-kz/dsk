import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccM29StepComponent } from './cns-acc-m29-step.component';

describe('CnsAccM29StepComponent', () => {
  let component: CnsAccM29StepComponent;
  let fixture: ComponentFixture<CnsAccM29StepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccM29StepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccM29StepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

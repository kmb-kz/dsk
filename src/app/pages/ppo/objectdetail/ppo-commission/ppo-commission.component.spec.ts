import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoCommissionComponent } from './ppo-commission.component';

describe('PpoCommissionComponent', () => {
  let component: PpoCommissionComponent;
  let fixture: ComponentFixture<PpoCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpoCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpoCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

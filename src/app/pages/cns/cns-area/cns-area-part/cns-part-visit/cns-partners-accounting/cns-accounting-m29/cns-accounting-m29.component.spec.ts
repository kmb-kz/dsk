import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccountingM29Component } from './cns-accounting-m29.component';

describe('CnsAccountingM29Component', () => {
  let component: CnsAccountingM29Component;
  let fixture: ComponentFixture<CnsAccountingM29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccountingM29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccountingM29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

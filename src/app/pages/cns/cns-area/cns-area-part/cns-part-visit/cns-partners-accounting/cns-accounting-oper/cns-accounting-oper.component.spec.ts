import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccountingOperComponent } from './cns-accounting-oper.component';

describe('CnsAccountingOperComponent', () => {
  let component: CnsAccountingOperComponent;
  let fixture: ComponentFixture<CnsAccountingOperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccountingOperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccountingOperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccountingCertComponent } from './cns-accounting-cert.component';

describe('CnsAccountingCertComponent', () => {
  let component: CnsAccountingCertComponent;
  let fixture: ComponentFixture<CnsAccountingCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccountingCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccountingCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccCertDocComponent } from './cns-acc-cert-doc.component';

describe('CnsAccCertDocComponent', () => {
  let component: CnsAccCertDocComponent;
  let fixture: ComponentFixture<CnsAccCertDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccCertDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccCertDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

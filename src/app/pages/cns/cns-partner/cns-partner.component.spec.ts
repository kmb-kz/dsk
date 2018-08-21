import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartnerComponent } from './cns-partner.component';

describe('CnsPartnerComponent', () => {
  let component: CnsPartnerComponent;
  let fixture: ComponentFixture<CnsPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

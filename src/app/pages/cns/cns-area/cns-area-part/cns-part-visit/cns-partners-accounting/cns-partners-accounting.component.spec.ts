import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartnersAccountingComponent } from './cns-partners-accounting.component';

describe('CnsPartnersAccountingComponent', () => {
  let component: CnsPartnersAccountingComponent;
  let fixture: ComponentFixture<CnsPartnersAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartnersAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartnersAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

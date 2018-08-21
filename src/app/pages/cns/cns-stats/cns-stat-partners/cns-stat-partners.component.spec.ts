import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsStatPartnersComponent } from './cns-stat-partners.component';

describe('CnsStatPartnersComponent', () => {
  let component: CnsStatPartnersComponent;
  let fixture: ComponentFixture<CnsStatPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsStatPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsStatPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

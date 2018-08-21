import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccCertListComponent } from './cns-acc-cert-list.component';

describe('CnsAccCertListComponent', () => {
  let component: CnsAccCertListComponent;
  let fixture: ComponentFixture<CnsAccCertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccCertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccCertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

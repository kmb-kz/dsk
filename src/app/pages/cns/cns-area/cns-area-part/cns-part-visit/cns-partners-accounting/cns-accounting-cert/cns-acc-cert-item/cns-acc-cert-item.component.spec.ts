import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccCertItemComponent } from './cns-acc-cert-item.component';

describe('CnsAccCertItemComponent', () => {
  let component: CnsAccCertItemComponent;
  let fixture: ComponentFixture<CnsAccCertItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccCertItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccCertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

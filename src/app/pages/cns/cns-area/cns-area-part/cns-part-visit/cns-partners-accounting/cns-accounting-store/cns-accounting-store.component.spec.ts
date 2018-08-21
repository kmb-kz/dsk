import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAccountingStoreComponent } from './cns-accounting-store.component';

describe('CnsAccountingStoreComponent', () => {
  let component: CnsAccountingStoreComponent;
  let fixture: ComponentFixture<CnsAccountingStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAccountingStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAccountingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

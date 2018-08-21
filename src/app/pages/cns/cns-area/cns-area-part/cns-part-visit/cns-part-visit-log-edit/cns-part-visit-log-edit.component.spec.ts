import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartVisitLogEditComponent } from './cns-part-visit-log-edit.component';

describe('CnsPartVisitLogEditComponent', () => {
  let component: CnsPartVisitLogEditComponent;
  let fixture: ComponentFixture<CnsPartVisitLogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartVisitLogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartVisitLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

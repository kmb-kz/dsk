import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartVisitComponent } from './cns-part-visit.component';

describe('CnsPartVisitComponent', () => {
  let component: CnsPartVisitComponent;
  let fixture: ComponentFixture<CnsPartVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

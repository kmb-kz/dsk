import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsStatAreapartComponent } from './cns-stat-areapart.component';

describe('CnsStatAreapartComponent', () => {
  let component: CnsStatAreapartComponent;
  let fixture: ComponentFixture<CnsStatAreapartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsStatAreapartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsStatAreapartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

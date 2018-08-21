import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPointPercentageComponent } from './cns-point-percentage.component';

describe('CnsPointPercentageComponent', () => {
  let component: CnsPointPercentageComponent;
  let fixture: ComponentFixture<CnsPointPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPointPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPointPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

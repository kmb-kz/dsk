import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsStatParametersComponent } from './cns-stat-parameters.component';

describe('CnsStatParametersComponent', () => {
  let component: CnsStatParametersComponent;
  let fixture: ComponentFixture<CnsStatParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsStatParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsStatParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPointParameterComponent } from './cns-point-parameter.component';

describe('CnsPointParameterComponent', () => {
  let component: CnsPointParameterComponent;
  let fixture: ComponentFixture<CnsPointParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPointParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPointParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

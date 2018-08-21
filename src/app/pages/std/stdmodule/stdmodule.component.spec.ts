import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdmoduleComponent } from './stdmodule.component';

describe('StdmoduleComponent', () => {
  let component: StdmoduleComponent;
  let fixture: ComponentFixture<StdmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

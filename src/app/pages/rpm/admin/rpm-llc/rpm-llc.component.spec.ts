import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmLlcComponent } from './rpm-llc.component';

describe('RpmLlcComponent', () => {
  let component: RpmLlcComponent;
  let fixture: ComponentFixture<RpmLlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmLlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmLlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

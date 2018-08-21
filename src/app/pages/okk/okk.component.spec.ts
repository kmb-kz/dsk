import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkComponent } from './okk.component';

describe('OkkComponent', () => {
  let component: OkkComponent;
  let fixture: ComponentFixture<OkkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

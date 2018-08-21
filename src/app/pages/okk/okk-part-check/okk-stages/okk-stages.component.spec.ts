import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkStagesComponent } from './okk-stages.component';

describe('OkkStagesComponent', () => {
  let component: OkkStagesComponent;
  let fixture: ComponentFixture<OkkStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

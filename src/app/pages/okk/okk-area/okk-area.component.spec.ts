import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkAreaComponent } from './okk-area.component';

describe('OkkAreaComponent', () => {
  let component: OkkAreaComponent;
  let fixture: ComponentFixture<OkkAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

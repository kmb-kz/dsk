import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkOspComponent } from './okk-osp.component';

describe('OkkOspComponent', () => {
  let component: OkkOspComponent;
  let fixture: ComponentFixture<OkkOspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkOspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkOspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

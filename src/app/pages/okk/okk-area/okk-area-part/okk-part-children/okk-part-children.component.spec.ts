import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartChildrenComponent } from './okk-part-children.component';

describe('OkkPartChildrenComponent', () => {
  let component: OkkPartChildrenComponent;
  let fixture: ComponentFixture<OkkPartChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

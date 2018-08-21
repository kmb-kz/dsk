import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistfdetailComponent } from './checklistfdetail.component';

describe('ChecklistfdetailComponent', () => {
  let component: ChecklistfdetailComponent;
  let fixture: ComponentFixture<ChecklistfdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistfdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistfdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

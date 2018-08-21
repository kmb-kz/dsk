import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMoreInfoComponent } from './checklist-more-info.component';

describe('ChecklistMoreInfoComponent', () => {
  let component: ChecklistMoreInfoComponent;
  let fixture: ComponentFixture<ChecklistMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

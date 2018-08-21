import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructivesComponent } from './constructives.component';

describe('ConstructivesComponent', () => {
  let component: ConstructivesComponent;
  let fixture: ComponentFixture<ConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

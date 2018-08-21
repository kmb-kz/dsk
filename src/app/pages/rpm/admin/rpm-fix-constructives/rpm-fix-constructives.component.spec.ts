import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmFixConstructivesComponent } from './rpm-fix-constructives.component';

describe('RpmFixConstructivesComponent', () => {
  let component: RpmFixConstructivesComponent;
  let fixture: ComponentFixture<RpmFixConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmFixConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmFixConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

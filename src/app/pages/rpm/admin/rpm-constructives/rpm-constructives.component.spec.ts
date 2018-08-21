import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmConstructivesComponent } from './rpm-constructives.component';

describe('RpmConstructivesComponent', () => {
  let component: RpmConstructivesComponent;
  let fixture: ComponentFixture<RpmConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

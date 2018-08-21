import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmFixChecklistComponent } from './rpm-fix-checklist.component';

describe('RpmFixChecklistComponent', () => {
  let component: RpmFixChecklistComponent;
  let fixture: ComponentFixture<RpmFixChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmFixChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmFixChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

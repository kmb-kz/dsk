import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmRemarkChecklistOneComponent } from './rpm-remark-checklist-one.component';

describe('RpmRemarkChecklistOneComponent', () => {
  let component: RpmRemarkChecklistOneComponent;
  let fixture: ComponentFixture<RpmRemarkChecklistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmRemarkChecklistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmRemarkChecklistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

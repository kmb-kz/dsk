import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmRemarkChecklistConstructiveComponent } from './rpm-remark-checklist-constructive.component';

describe('RpmRemarkChecklistConstructiveComponent', () => {
  let component: RpmRemarkChecklistConstructiveComponent;
  let fixture: ComponentFixture<RpmRemarkChecklistConstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmRemarkChecklistConstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmRemarkChecklistConstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

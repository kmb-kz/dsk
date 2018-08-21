import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmRemarkChecklistComponent } from './rpm-remark-checklist.component';

describe('RpmRemarkChecklistComponent', () => {
  let component: RpmRemarkChecklistComponent;
  let fixture: ComponentFixture<RpmRemarkChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmRemarkChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmRemarkChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

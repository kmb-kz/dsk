import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksListComponent } from './remarks-list.component';

describe('RemarksListComponent', () => {
  let component: RemarksListComponent;
  let fixture: ComponentFixture<RemarksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

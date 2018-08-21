import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmRemarkButtonsComponent } from './rpm-remark-buttons.component';

describe('RpmRemarkButtonsComponent', () => {
  let component: RpmRemarkButtonsComponent;
  let fixture: ComponentFixture<RpmRemarkButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmRemarkButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmRemarkButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

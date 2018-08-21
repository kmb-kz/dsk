import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmConstructiveComponent } from './rpm-constructive.component';

describe('RpmConstructiveComponent', () => {
  let component: RpmConstructiveComponent;
  let fixture: ComponentFixture<RpmConstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmConstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmConstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

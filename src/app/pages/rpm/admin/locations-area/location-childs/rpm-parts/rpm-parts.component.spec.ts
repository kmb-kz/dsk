import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmPartsComponent } from './rpm-parts.component';

describe('RpmPartsComponent', () => {
  let component: RpmPartsComponent;
  let fixture: ComponentFixture<RpmPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmAreaComponent } from './rpm-area.component';

describe('RpmAreaComponent', () => {
  let component: RpmAreaComponent;
  let fixture: ComponentFixture<RpmAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

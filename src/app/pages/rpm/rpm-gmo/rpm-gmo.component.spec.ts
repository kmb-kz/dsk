import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmGmoComponent } from './rpm-gmo.component';

describe('RpmGmoComponent', () => {
  let component: RpmGmoComponent;
  let fixture: ComponentFixture<RpmGmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmGmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmGmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

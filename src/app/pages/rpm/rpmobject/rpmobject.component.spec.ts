import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmobjectComponent } from './rpmobject.component';

describe('RpmobjectComponent', () => {
  let component: RpmobjectComponent;
  let fixture: ComponentFixture<RpmobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

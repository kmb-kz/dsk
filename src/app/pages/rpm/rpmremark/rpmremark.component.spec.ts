import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmremarkComponent } from './rpmremark.component';

describe('RpmremarkComponent', () => {
  let component: RpmremarkComponent;
  let fixture: ComponentFixture<RpmremarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmremarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

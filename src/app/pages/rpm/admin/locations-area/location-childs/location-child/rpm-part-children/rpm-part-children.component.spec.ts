import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmPartChildrenComponent } from './rpm-part-children.component';

describe('RpmPartChildrenComponent', () => {
  let component: RpmPartChildrenComponent;
  let fixture: ComponentFixture<RpmPartChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmPartChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmPartChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

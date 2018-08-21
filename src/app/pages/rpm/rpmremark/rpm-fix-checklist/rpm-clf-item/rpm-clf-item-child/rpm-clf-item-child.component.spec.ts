import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmClfItemChildComponent } from './rpm-clf-item-child.component';

describe('RpmClfItemChildComponent', () => {
  let component: RpmClfItemChildComponent;
  let fixture: ComponentFixture<RpmClfItemChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmClfItemChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmClfItemChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

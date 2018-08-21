import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmClfItemComponent } from './rpm-clf-item.component';

describe('RpmClfItemComponent', () => {
  let component: RpmClfItemComponent;
  let fixture: ComponentFixture<RpmClfItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmClfItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmClfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

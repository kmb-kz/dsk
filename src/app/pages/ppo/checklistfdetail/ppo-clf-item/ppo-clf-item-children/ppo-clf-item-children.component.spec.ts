import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoClfItemChildrenComponent } from './ppo-clf-item-children.component';

describe('PpoClfItemChildrenComponent', () => {
  let component: PpoClfItemChildrenComponent;
  let fixture: ComponentFixture<PpoClfItemChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpoClfItemChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpoClfItemChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

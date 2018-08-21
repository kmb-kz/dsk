import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoClfItemComponent } from './ppo-clf-item.component';

describe('PpoClfItemComponent', () => {
  let component: PpoClfItemComponent;
  let fixture: ComponentFixture<PpoClfItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpoClfItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpoClfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

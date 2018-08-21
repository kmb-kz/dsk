import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughingComponent } from './roughing.component';

describe('RoughingComponent', () => {
  let component: RoughingComponent;
  let fixture: ComponentFixture<RoughingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoughingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardItemComponent } from './standard-item.component';

describe('StandardItemComponent', () => {
  let component: StandardItemComponent;
  let fixture: ComponentFixture<StandardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

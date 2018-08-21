import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructiveComponent } from './constructive.component';

describe('ConstructiveComponent', () => {
  let component: ConstructiveComponent;
  let fixture: ComponentFixture<ConstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastandardchangeComponent } from './areastandardchange.component';

describe('AreastandardchangeComponent', () => {
  let component: AreastandardchangeComponent;
  let fixture: ComponentFixture<AreastandardchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreastandardchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreastandardchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastandardComponent } from './areastandard.component';

describe('AreastandardComponent', () => {
  let component: AreastandardComponent;
  let fixture: ComponentFixture<AreastandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreastandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreastandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

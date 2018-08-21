import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastandardsComponent } from './areastandards.component';

describe('AreastandardsComponent', () => {
  let component: AreastandardsComponent;
  let fixture: ComponentFixture<AreastandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreastandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreastandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

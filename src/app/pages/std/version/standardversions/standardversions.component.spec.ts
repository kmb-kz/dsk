import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardversionsComponent } from './standardversions.component';

describe('StandardversionsComponent', () => {
  let component: StandardversionsComponent;
  let fixture: ComponentFixture<StandardversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

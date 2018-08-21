import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardversionComponent } from './standardversion.component';

describe('StandardversionComponent', () => {
  let component: StandardversionComponent;
  let fixture: ComponentFixture<StandardversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

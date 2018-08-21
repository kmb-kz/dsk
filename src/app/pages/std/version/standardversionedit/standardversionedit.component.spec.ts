import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardversioneditComponent } from './standardversionedit.component';

describe('StandardversioneditComponent', () => {
  let component: StandardversioneditComponent;
  let fixture: ComponentFixture<StandardversioneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardversioneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardversioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

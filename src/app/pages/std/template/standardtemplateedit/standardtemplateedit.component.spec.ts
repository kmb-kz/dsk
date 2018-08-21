import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardtemplateeditComponent } from './standardtemplateedit.component';

describe('StandardtemplateeditComponent', () => {
  let component: StandardtemplateeditComponent;
  let fixture: ComponentFixture<StandardtemplateeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardtemplateeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardtemplateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

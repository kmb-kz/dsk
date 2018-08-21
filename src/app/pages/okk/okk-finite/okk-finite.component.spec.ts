import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkFiniteComponent } from './okk-finite.component';

describe('OkkFiniteComponent', () => {
  let component: OkkFiniteComponent;
  let fixture: ComponentFixture<OkkFiniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkFiniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkFiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardcopyComponent } from './standardcopy.component';

describe('StandardcopyComponent', () => {
  let component: StandardcopyComponent;
  let fixture: ComponentFixture<StandardcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

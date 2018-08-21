import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrlettersComponent } from './grletters.component';

describe('GrlettersComponent', () => {
  let component: GrlettersComponent;
  let fixture: ComponentFixture<GrlettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrlettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

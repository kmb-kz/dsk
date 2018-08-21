import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdindexComponent } from './stdindex.component';

describe('StdindexComponent', () => {
  let component: StdindexComponent;
  let fixture: ComponentFixture<StdindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

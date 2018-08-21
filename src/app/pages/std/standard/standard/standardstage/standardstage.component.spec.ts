import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardstageComponent } from './standardstage.component';

describe('StandardstageComponent', () => {
  let component: StandardstageComponent;
  let fixture: ComponentFixture<StandardstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

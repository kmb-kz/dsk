import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardeditComponent } from './standardedit.component';

describe('StandardeditComponent', () => {
  let component: StandardeditComponent;
  let fixture: ComponentFixture<StandardeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

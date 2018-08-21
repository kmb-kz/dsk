import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardtemplatesComponent } from './standardtemplates.component';

describe('StandardtemplatesComponent', () => {
  let component: StandardtemplatesComponent;
  let fixture: ComponentFixture<StandardtemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardtemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

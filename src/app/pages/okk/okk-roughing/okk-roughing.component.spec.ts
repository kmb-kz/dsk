import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkRoughingComponent } from './okk-roughing.component';

describe('OkkRoughingComponent', () => {
  let component: OkkRoughingComponent;
  let fixture: ComponentFixture<OkkRoughingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkRoughingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkRoughingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

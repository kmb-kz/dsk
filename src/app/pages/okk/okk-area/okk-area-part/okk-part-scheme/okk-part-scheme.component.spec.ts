import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartSchemeComponent } from './okk-part-scheme.component';

describe('OkkPartSchemeComponent', () => {
  let component: OkkPartSchemeComponent;
  let fixture: ComponentFixture<OkkPartSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

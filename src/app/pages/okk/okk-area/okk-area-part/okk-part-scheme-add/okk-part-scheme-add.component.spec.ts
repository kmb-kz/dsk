import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartSchemeAddComponent } from './okk-part-scheme-add.component';

describe('OkkPartSchemeAddComponent', () => {
  let component: OkkPartSchemeAddComponent;
  let fixture: ComponentFixture<OkkPartSchemeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartSchemeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartSchemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

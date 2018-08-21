import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartCheckPanelComponent } from './okk-part-check-panel.component';

describe('OkkPartCheckPanelComponent', () => {
  let component: OkkPartCheckPanelComponent;
  let fixture: ComponentFixture<OkkPartCheckPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartCheckPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartCheckPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

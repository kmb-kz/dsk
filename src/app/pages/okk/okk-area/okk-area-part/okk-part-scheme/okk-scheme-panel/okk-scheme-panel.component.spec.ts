import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkSchemePanelComponent } from './okk-scheme-panel.component';

describe('OkkSchemePanelComponent', () => {
  let component: OkkSchemePanelComponent;
  let fixture: ComponentFixture<OkkSchemePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkSchemePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkSchemePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

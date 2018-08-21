import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsSchemePanelNewPointComponent } from './cns-scheme-panel-new-point.component';

describe('CnsSchemePanelNewPointComponent', () => {
  let component: CnsSchemePanelNewPointComponent;
  let fixture: ComponentFixture<CnsSchemePanelNewPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsSchemePanelNewPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsSchemePanelNewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

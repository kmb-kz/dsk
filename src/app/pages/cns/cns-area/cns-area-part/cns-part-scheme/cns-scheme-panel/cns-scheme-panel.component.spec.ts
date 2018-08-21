import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsSchemePanelComponent } from './cns-scheme-panel.component';

describe('CnsSchemePanelComponent', () => {
  let component: CnsSchemePanelComponent;
  let fixture: ComponentFixture<CnsSchemePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsSchemePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsSchemePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

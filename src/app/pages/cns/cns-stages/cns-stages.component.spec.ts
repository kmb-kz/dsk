import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsStagesComponent } from './cns-stages.component';

describe('CnsStagesComponent', () => {
  let component: CnsStagesComponent;
  let fixture: ComponentFixture<CnsStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

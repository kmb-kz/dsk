import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsSchemePointComponent } from './cns-scheme-point.component';

describe('CnsSchemePointComponent', () => {
  let component: CnsSchemePointComponent;
  let fixture: ComponentFixture<CnsSchemePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsSchemePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsSchemePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

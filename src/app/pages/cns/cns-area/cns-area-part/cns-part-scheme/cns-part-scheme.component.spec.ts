import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartSchemeComponent } from './cns-part-scheme.component';

describe('CnsPartShemeComponent', () => {
  let component: CnsPartSchemeComponent;
  let fixture: ComponentFixture<CnsPartSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartSchemeAddComponent } from './cns-part-scheme-add.component';

describe('CnsPartSchemeAddComponent', () => {
  let component: CnsPartSchemeAddComponent;
  let fixture: ComponentFixture<CnsPartSchemeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartSchemeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartSchemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

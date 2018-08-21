import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreaPartsComponent } from './cns-area-parts.component';

describe('CnsAreaPartsComponent', () => {
  let component: CnsAreaPartsComponent;
  let fixture: ComponentFixture<CnsAreaPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreaPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreaPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

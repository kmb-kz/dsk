import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPointMaterialComponent } from './cns-point-material.component';

describe('CnsPointMaterialComponent', () => {
  let component: CnsPointMaterialComponent;
  let fixture: ComponentFixture<CnsPointMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPointMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPointMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

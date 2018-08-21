import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPointMaterialsComponent } from './cns-point-materials.component';

describe('CnsPointMaterialsComponent', () => {
  let component: CnsPointMaterialsComponent;
  let fixture: ComponentFixture<CnsPointMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPointMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPointMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

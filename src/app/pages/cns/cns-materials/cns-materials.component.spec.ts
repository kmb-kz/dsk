import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsMaterialsComponent } from './cns-materials.component';

describe('CnsMaterialsComponent', () => {
  let component: CnsMaterialsComponent;
  let fixture: ComponentFixture<CnsMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

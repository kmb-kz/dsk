import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcModalOkkComponent } from './qc-modal-okk.component';

describe('QcModalOkkComponent', () => {
  let component: QcModalOkkComponent;
  let fixture: ComponentFixture<QcModalOkkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcModalOkkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcModalOkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

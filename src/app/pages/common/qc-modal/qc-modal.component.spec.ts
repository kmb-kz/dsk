import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcModalComponent } from './qc-modal.component';

describe('QcModalComponent', () => {
  let component: QcModalComponent;
  let fixture: ComponentFixture<QcModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

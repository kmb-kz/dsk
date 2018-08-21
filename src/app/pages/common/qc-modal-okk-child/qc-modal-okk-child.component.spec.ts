import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcModalOkkChildComponent } from './qc-modal-okk-child.component';

describe('QcModalOkkChildComponent', () => {
  let component: QcModalOkkChildComponent;
  let fixture: ComponentFixture<QcModalOkkChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcModalOkkChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcModalOkkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

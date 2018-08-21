import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPointStageComponent } from './cns-point-stage.component';

describe('CnsPointStageComponent', () => {
  let component: CnsPointStageComponent;
  let fixture: ComponentFixture<CnsPointStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPointStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPointStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

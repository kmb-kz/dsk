import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreaComponent } from './cns-area.component';

describe('CnsAreaComponent', () => {
  let component: CnsAreaComponent;
  let fixture: ComponentFixture<CnsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

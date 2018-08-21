import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsComponent } from './cns.component';

describe('CnsComponent', () => {
  let component: CnsComponent;
  let fixture: ComponentFixture<CnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

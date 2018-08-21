import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsConstructiveComponent } from './cns-constructive.component';

describe('CnsConstructiveComponent', () => {
  let component: CnsConstructiveComponent;
  let fixture: ComponentFixture<CnsConstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsConstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsConstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

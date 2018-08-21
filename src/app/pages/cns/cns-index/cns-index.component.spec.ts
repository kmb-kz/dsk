import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsIndexComponent } from './cns-index.component';

describe('CnsIndexComponent', () => {
  let component: CnsIndexComponent;
  let fixture: ComponentFixture<CnsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

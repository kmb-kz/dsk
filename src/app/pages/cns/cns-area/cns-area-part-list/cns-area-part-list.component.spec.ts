import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreaPartShortComponent } from './cns-area-part-list.component';

describe('CnsAreaPartShortComponent', () => {
  let component: CnsAreaPartShortComponent;
  let fixture: ComponentFixture<CnsAreaPartShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreaPartShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreaPartShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

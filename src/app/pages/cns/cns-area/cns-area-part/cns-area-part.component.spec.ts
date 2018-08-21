import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreaPartComponent } from './cns-area-part.component';

describe('CnsAreaPartComponent', () => {
  let component: CnsAreaPartComponent;
  let fixture: ComponentFixture<CnsAreaPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreaPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreaPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

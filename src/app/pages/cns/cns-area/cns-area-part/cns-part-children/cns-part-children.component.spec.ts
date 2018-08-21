import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsPartChildrenComponent } from './cns-part-children.component';

describe('CnsPartChildrenComponent', () => {
  let component: CnsPartChildrenComponent;
  let fixture: ComponentFixture<CnsPartChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsPartChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsPartChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

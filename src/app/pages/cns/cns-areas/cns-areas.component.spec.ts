import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreasComponent } from './cns-areas.component';

describe('CnsAreasComponent', () => {
  let component: CnsAreasComponent;
  let fixture: ComponentFixture<CnsAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

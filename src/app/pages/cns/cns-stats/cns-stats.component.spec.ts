import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsStatsComponent } from './cns-stats.component';

describe('CnsStatsComponent', () => {
  let component: CnsStatsComponent;
  let fixture: ComponentFixture<CnsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

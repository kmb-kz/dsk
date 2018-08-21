import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmStatisticsComponent } from './rpm-statistics.component';

describe('RpmStatisticsComponent', () => {
  let component: RpmStatisticsComponent;
  let fixture: ComponentFixture<RpmStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

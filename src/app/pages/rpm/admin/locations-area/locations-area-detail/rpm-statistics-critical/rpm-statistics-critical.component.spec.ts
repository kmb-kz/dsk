import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmStatisticsCriticalComponent } from './rpm-statistics-critical.component';

describe('RpmStatisticsCriticalComponent', () => {
  let component: RpmStatisticsCriticalComponent;
  let fixture: ComponentFixture<RpmStatisticsCriticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmStatisticsCriticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmStatisticsCriticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

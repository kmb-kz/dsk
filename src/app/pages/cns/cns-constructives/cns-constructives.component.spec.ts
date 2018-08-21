import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsConstructivesComponent } from './cns-constructives.component';

describe('CnsConstructivesComponent', () => {
  let component: CnsConstructivesComponent;
  let fixture: ComponentFixture<CnsConstructivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsConstructivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsConstructivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

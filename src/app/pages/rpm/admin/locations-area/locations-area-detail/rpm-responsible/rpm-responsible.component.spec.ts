import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmResponsibleComponent } from './rpm-responsible.component';

describe('RpmResponsibleComponent', () => {
  let component: RpmResponsibleComponent;
  let fixture: ComponentFixture<RpmResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

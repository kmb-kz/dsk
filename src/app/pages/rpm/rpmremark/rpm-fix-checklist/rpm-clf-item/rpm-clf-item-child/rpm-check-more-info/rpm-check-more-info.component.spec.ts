import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmCheckMoreInfoComponent } from './rpm-check-more-info.component';

describe('RpmCheckMoreInfoComponent', () => {
  let component: RpmCheckMoreInfoComponent;
  let fixture: ComponentFixture<RpmCheckMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmCheckMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmCheckMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

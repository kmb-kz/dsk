import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkAreaPartsComponent } from './okk-area-parts.component';

describe('OkkAreaPartsComponent', () => {
  let component: OkkAreaPartsComponent;
  let fixture: ComponentFixture<OkkAreaPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkAreaPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkAreaPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkAreaPartListComponent } from './okk-area-part-list.component';

describe('OkkAreaPartListComponent', () => {
  let component: OkkAreaPartListComponent;
  let fixture: ComponentFixture<OkkAreaPartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkAreaPartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkAreaPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

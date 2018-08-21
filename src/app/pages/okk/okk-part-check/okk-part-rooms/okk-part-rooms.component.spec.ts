import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkPartRoomsComponent } from './okk-part-rooms.component';

describe('OkkPartRoomsComponent', () => {
  let component: OkkPartRoomsComponent;
  let fixture: ComponentFixture<OkkPartRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkPartRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkPartRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

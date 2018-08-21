import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkkAreaPartComponent } from './okk-area-part.component';

describe('OkkAreaPartComponent', () => {
  let component: OkkAreaPartComponent;
  let fixture: ComponentFixture<OkkAreaPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkkAreaPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkkAreaPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

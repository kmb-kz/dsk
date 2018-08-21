import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDetourComponent } from './area-detour.component';

describe('AreaDetourComponent', () => {
  let component: AreaDetourComponent;
  let fixture: ComponentFixture<AreaDetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

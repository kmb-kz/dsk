import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuComponent } from './tsu.component';

describe('TsuComponent', () => {
  let component: TsuComponent;
  let fixture: ComponentFixture<TsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

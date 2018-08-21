import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuAreaComponent } from './tsu-area.component';

describe('TsuAreaComponent', () => {
  let component: TsuAreaComponent;
  let fixture: ComponentFixture<TsuAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

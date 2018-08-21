import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuIndexComponent } from './tsu-index.component';

describe('TsuIndexComponent', () => {
  let component: TsuIndexComponent;
  let fixture: ComponentFixture<TsuIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

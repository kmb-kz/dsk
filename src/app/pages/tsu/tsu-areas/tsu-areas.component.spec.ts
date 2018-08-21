import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuAreasComponent } from './tsu-areas.component';

describe('TsuAreasComponent', () => {
  let component: TsuAreasComponent;
  let fixture: ComponentFixture<TsuAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

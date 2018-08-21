import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuAreaPartsComponent } from './tsu-area-parts.component';

describe('TsuAreaPartsComponent', () => {
  let component: TsuAreaPartsComponent;
  let fixture: ComponentFixture<TsuAreaPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuAreaPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuAreaPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

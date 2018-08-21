import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuAreaPartComponent } from './tsu-area-part.component';

describe('TsuAreaPartComponent', () => {
  let component: TsuAreaPartComponent;
  let fixture: ComponentFixture<TsuAreaPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuAreaPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuAreaPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

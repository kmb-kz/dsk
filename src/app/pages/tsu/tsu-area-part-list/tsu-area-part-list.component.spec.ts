import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuAreaPartListComponent } from './tsu-area-part-list.component';

describe('TsuAreaPartListComponent', () => {
  let component: TsuAreaPartListComponent;
  let fixture: ComponentFixture<TsuAreaPartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuAreaPartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuAreaPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

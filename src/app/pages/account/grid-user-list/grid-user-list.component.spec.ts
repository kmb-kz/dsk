import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUserListComponent } from './grid-user-list.component';

describe('GridUserListComponent', () => {
  let component: GridUserListComponent;
  let fixture: ComponentFixture<GridUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmoRemarkListComponent } from './gmo-remark-list.component';

describe('GmoRemarkListComponent', () => {
  let component: GmoRemarkListComponent;
  let fixture: ComponentFixture<GmoRemarkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmoRemarkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmoRemarkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkInfoComponent } from './remark-info.component';

describe('RemarkInfoComponent', () => {
  let component: RemarkInfoComponent;
  let fixture: ComponentFixture<RemarkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

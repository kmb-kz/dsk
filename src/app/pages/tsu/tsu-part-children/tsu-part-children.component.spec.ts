import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuPartChildrenComponent } from './tsu-part-children.component';

describe('TsuPartChildrenComponent', () => {
  let component: TsuPartChildrenComponent;
  let fixture: ComponentFixture<TsuPartChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuPartChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuPartChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

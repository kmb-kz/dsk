import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaaddstandardComponent } from './areaaddstandard.component';

describe('AreaaddstandardComponent', () => {
  let component: AreaaddstandardComponent;
  let fixture: ComponentFixture<AreaaddstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaaddstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaaddstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

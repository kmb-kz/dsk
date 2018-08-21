import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaimporttemplateComponent } from './areaimporttemplate.component';

describe('AreaimporttemplateComponent', () => {
  let component: AreaimporttemplateComponent;
  let fixture: ComponentFixture<AreaimporttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaimporttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaimporttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

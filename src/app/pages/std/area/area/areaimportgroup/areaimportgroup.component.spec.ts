import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaimportgroupComponent } from './areaimportgroup.component';

describe('AreaimportgroupComponent', () => {
  let component: AreaimportgroupComponent;
  let fixture: ComponentFixture<AreaimportgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaimportgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaimportgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

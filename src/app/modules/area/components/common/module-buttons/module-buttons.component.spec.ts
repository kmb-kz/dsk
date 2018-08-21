import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleButtonsComponent } from './module-buttons.component';

describe('ModuleButtonsComponent', () => {
  let component: ModuleButtonsComponent;
  let fixture: ComponentFixture<ModuleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

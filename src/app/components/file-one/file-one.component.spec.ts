import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOneComponent } from './file-one.component';

describe('FileOneComponent', () => {
  let component: FileOneComponent;
  let fixture: ComponentFixture<FileOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsAreaAnswersComponent } from './cns-area-answers.component';

describe('CnsAreaAnswersComponent', () => {
  let component: CnsAreaAnswersComponent;
  let fixture: ComponentFixture<CnsAreaAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsAreaAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsAreaAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

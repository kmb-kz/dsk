import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsParameterChatComponent } from './cns-parameter-chat.component';

describe('CnsParameterChatComponent', () => {
  let component: CnsParameterChatComponent;
  let fixture: ComponentFixture<CnsParameterChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsParameterChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsParameterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

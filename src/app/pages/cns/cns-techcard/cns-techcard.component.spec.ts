import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsTechcardComponent } from './cns-techcard.component';

describe('CnsTechcardComponent', () => {
  let component: CnsTechcardComponent;
  let fixture: ComponentFixture<CnsTechcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsTechcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsTechcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

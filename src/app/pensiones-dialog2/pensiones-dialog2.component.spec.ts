import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionesDialog2Component } from './pensiones-dialog2.component';

describe('PensionesDialog2Component', () => {
  let component: PensionesDialog2Component;
  let fixture: ComponentFixture<PensionesDialog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionesDialog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionesDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

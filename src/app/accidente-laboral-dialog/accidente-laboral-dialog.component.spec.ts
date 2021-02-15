import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidenteLaboralDialogComponent } from './accidente-laboral-dialog.component';

describe('AccidenteLaboralDialogComponent', () => {
  let component: AccidenteLaboralDialogComponent;
  let fixture: ComponentFixture<AccidenteLaboralDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidenteLaboralDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidenteLaboralDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

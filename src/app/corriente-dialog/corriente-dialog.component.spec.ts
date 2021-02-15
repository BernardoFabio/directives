import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrienteDialogComponent } from './corriente-dialog.component';

describe('CorrienteDialogComponent', () => {
  let component: CorrienteDialogComponent;
  let fixture: ComponentFixture<CorrienteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrienteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

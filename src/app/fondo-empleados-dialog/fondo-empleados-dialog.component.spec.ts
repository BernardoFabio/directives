import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoEmpleadosDialogComponent } from './fondo-empleados-dialog.component';

describe('FondoEmpleadosDialogComponent', () => {
  let component: FondoEmpleadosDialogComponent;
  let fixture: ComponentFixture<FondoEmpleadosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoEmpleadosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoEmpleadosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

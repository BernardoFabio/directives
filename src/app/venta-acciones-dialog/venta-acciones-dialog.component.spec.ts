import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAccionesDialogComponent } from './venta-acciones-dialog.component';

describe('VentaAccionesDialogComponent', () => {
  let component: VentaAccionesDialogComponent;
  let fixture: ComponentFixture<VentaAccionesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaAccionesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaAccionesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

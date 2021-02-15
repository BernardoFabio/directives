import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaVehiculoDialogComponent } from './venta-vehiculo-dialog.component';

describe('VentaVehiculoDialogComponent', () => {
  let component: VentaVehiculoDialogComponent;
  let fixture: ComponentFixture<VentaVehiculoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaVehiculoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaVehiculoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

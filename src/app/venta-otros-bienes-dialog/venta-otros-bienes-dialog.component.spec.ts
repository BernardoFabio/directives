import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaOtrosBienesDialogComponent } from './venta-otros-bienes-dialog.component';

describe('VentaOtrosBienesDialogComponent', () => {
  let component: VentaOtrosBienesDialogComponent;
  let fixture: ComponentFixture<VentaOtrosBienesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaOtrosBienesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaOtrosBienesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

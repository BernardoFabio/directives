import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendamientoVehiculosDialogComponent } from './arrendamiento-vehiculos-dialog.component';

describe('ArrendamientoVehiculosDialogComponent', () => {
  let component: ArrendamientoVehiculosDialogComponent;
  let fixture: ComponentFixture<ArrendamientoVehiculosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendamientoVehiculosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendamientoVehiculosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

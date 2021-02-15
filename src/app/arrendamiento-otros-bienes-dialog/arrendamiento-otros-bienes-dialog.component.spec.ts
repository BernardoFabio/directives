import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendamientoOtrosBienesDialogComponent } from './arrendamiento-otros-bienes-dialog.component';

describe('ArrendamientoOtrosBienesDialogComponent', () => {
  let component: ArrendamientoOtrosBienesDialogComponent;
  let fixture: ComponentFixture<ArrendamientoOtrosBienesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendamientoOtrosBienesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendamientoOtrosBienesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

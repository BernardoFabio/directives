import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendamientoMaquinariaDialogComponent } from './arrendamiento-maquinaria-dialog.component';

describe('ArrendamientoMaquinariaDialogComponent', () => {
  let component: ArrendamientoMaquinariaDialogComponent;
  let fixture: ComponentFixture<ArrendamientoMaquinariaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendamientoMaquinariaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendamientoMaquinariaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

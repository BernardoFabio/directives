import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosTercerosDialogComponent } from './prestamos-terceros-dialog.component';

describe('PrestamosTercerosDialogComponent', () => {
  let component: PrestamosTercerosDialogComponent;
  let fixture: ComponentFixture<PrestamosTercerosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosTercerosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosTercerosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaBienRaizDialogComponent } from './venta-bien-raiz-dialog.component';

describe('VentaBienRaizDialogComponent', () => {
  let component: VentaBienRaizDialogComponent;
  let fixture: ComponentFixture<VentaBienRaizDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaBienRaizDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaBienRaizDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoDialogComponent } from './tarjeta-credito-dialog.component';

describe('TarjetaCreditoDialogComponent', () => {
  let component: TarjetaCreditoDialogComponent;
  let fixture: ComponentFixture<TarjetaCreditoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

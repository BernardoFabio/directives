import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCompensacionDialogComponent } from './caja-compensacion-dialog.component';

describe('CajaCompensacionDialogComponent', () => {
  let component: CajaCompensacionDialogComponent;
  let fixture: ComponentFixture<CajaCompensacionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaCompensacionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaCompensacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

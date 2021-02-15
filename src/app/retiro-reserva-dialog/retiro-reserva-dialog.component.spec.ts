import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroReservaDialogComponent } from './retiro-reserva-dialog.component';

describe('RetiroReservaDialogComponent', () => {
  let component: RetiroReservaDialogComponent;
  let fixture: ComponentFixture<RetiroReservaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiroReservaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroReservaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

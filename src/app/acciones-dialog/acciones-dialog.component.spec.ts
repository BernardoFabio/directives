import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesDialogComponent } from './acciones-dialog.component';

describe('AccionesDialogComponent', () => {
  let component: AccionesDialogComponent;
  let fixture: ComponentFixture<AccionesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

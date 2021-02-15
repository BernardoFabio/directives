import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosBienesDialogComponent } from './otros-bienes-dialog.component';

describe('OtrosBienesDialogComponent', () => {
  let component: OtrosBienesDialogComponent;
  let fixture: ComponentFixture<OtrosBienesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosBienesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosBienesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

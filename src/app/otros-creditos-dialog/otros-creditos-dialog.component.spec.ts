import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosCreditosDialogComponent } from './otros-creditos-dialog.component';

describe('OtrosCreditosDialogComponent', () => {
  let component: OtrosCreditosDialogComponent;
  let fixture: ComponentFixture<OtrosCreditosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosCreditosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosCreditosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

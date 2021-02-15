import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDTDialogComponent } from './cdtdialog.component';

describe('CDTDialogComponent', () => {
  let component: CDTDialogComponent;
  let fixture: ComponentFixture<CDTDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDTDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDTDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

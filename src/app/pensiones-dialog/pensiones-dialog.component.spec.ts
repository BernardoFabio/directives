import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionesDialogComponent } from './pensiones-dialog.component';

describe('PensionesDialogComponent', () => {
  let component: PensionesDialogComponent;
  let fixture: ComponentFixture<PensionesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

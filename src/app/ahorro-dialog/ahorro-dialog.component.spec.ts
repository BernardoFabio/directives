import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorroDialogComponent } from './ahorro-dialog.component';

describe('AhorroDialogComponent', () => {
  let component: AhorroDialogComponent;
  let fixture: ComponentFixture<AhorroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiduciariaDialogComponent } from './fiduciaria-dialog.component';

describe('FiduciariaDialogComponent', () => {
  let component: FiduciariaDialogComponent;
  let fixture: ComponentFixture<FiduciariaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiduciariaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiduciariaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

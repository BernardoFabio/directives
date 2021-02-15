import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRetiroDialogComponent } from './plan-retiro-dialog.component';

describe('PlanRetiroDialogComponent', () => {
  let component: PlanRetiroDialogComponent;
  let fixture: ComponentFixture<PlanRetiroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRetiroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRetiroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

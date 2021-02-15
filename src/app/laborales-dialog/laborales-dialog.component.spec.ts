import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralesDialogComponent } from './laborales-dialog.component';

describe('LaboralesDialogComponent', () => {
  let component: LaboralesDialogComponent;
  let fixture: ComponentFixture<LaboralesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboralesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboralesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

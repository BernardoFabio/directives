import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoHipotecarioDialogComponent } from './credito-hipotecario-dialog.component';

describe('CreditoHipotecarioDialogComponent', () => {
  let component: CreditoHipotecarioDialogComponent;
  let fixture: ComponentFixture<CreditoHipotecarioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoHipotecarioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoHipotecarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

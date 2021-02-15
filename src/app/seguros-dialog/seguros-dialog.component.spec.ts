import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosDialogComponent } from './seguros-dialog.component';

describe('SegurosDialogComponent', () => {
  let component: SegurosDialogComponent;
  let fixture: ComponentFixture<SegurosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

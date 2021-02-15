import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternidadDialogComponent } from './maternidad-dialog.component';

describe('MaternidadDialogComponent', () => {
  let component: MaternidadDialogComponent;
  let fixture: ComponentFixture<MaternidadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaternidadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaternidadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

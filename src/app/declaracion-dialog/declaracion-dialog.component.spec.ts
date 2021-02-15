import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionDialogComponent } from './declaracion-dialog.component';

describe('DeclaracionDialogComponent', () => {
  let component: DeclaracionDialogComponent;
  let fixture: ComponentFixture<DeclaracionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

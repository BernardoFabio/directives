import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionDialogComponent } from './alimentacion-dialog.component';

describe('AlimentacionDialogComponent', () => {
  let component: AlimentacionDialogComponent;
  let fixture: ComponentFixture<AlimentacionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentacionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

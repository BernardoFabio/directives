import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepagadaDialogComponent } from './prepagada-dialog.component';

describe('PrepagadaDialogComponent', () => {
  let component: PrepagadaDialogComponent;
  let fixture: ComponentFixture<PrepagadaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepagadaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepagadaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

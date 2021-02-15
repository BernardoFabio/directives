import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioPropioDialogComponent } from './negocio-propio-dialog.component';

describe('NegocioPropioDialogComponent', () => {
  let component: NegocioPropioDialogComponent;
  let fixture: ComponentFixture<NegocioPropioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioPropioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioPropioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

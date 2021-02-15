import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerenciaDialogComponent } from './herencia-dialog.component';

describe('HerenciaDialogComponent', () => {
  let component: HerenciaDialogComponent;
  let fixture: ComponentFixture<HerenciaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerenciaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerenciaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuerzasArmadasDialogComponent } from './fuerzas-armadas-dialog.component';

describe('FuerzasArmadasDialogComponent', () => {
  let component: FuerzasArmadasDialogComponent;
  let fixture: ComponentFixture<FuerzasArmadasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuerzasArmadasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuerzasArmadasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

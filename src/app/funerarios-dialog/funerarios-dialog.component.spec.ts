import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunerariosDialogComponent } from './funerarios-dialog.component';

describe('FunerariosDialogComponent', () => {
  let component: FunerariosDialogComponent;
  let fixture: ComponentFixture<FunerariosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunerariosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunerariosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

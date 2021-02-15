import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensacionMuerteDialogComponent } from './compensacion-muerte-dialog.component';

describe('CompensacionMuerteDialogComponent', () => {
  let component: CompensacionMuerteDialogComponent;
  let fixture: ComponentFixture<CompensacionMuerteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensacionMuerteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensacionMuerteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

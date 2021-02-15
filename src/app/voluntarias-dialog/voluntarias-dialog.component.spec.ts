import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariasDialogComponent } from './voluntarias-dialog.component';

describe('VoluntariasDialogComponent', () => {
  let component: VoluntariasDialogComponent;
  let fixture: ComponentFixture<VoluntariasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntariasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntariasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

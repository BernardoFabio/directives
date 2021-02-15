import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConyugalDialogComponent } from './conyugal-dialog.component';

describe('ConyugalDialogComponent', () => {
  let component: ConyugalDialogComponent;
  let fixture: ComponentFixture<ConyugalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConyugalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConyugalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

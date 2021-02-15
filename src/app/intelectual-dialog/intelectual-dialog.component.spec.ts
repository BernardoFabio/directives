import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelectualDialogComponent } from './intelectual-dialog.component';

describe('IntelectualDialogComponent', () => {
  let component: IntelectualDialogComponent;
  let fixture: ComponentFixture<IntelectualDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelectualDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelectualDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

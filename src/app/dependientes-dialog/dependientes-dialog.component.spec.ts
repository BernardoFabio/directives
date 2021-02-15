import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependientesDialogComponent } from './dependientes-dialog.component';

describe('DependientesDialogComponent', () => {
  let component: DependientesDialogComponent;
  let fixture: ComponentFixture<DependientesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependientesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependientesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

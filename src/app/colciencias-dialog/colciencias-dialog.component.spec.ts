import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColcienciasDialogComponent } from './colciencias-dialog.component';

describe('ColcienciasDialogComponent', () => {
  let component: ColcienciasDialogComponent;
  let fixture: ComponentFixture<ColcienciasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColcienciasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColcienciasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

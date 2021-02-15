import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendamientoBienRaizDialogComponent } from './arrendamiento-bien-raiz-dialog.component';

describe('ArrendamientoBienRaizDialogComponent', () => {
  let component: ArrendamientoBienRaizDialogComponent;
  let fixture: ComponentFixture<ArrendamientoBienRaizDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendamientoBienRaizDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendamientoBienRaizDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienRaizDialogComponent } from './bien-raiz-dialog.component';

describe('BienRaizDialogComponent', () => {
  let component: BienRaizDialogComponent;
  let fixture: ComponentFixture<BienRaizDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienRaizDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienRaizDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

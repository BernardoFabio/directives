import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExterioresDialogComponent } from './exteriores-dialog.component';

describe('ExterioresDialogComponent', () => {
  let component: ExterioresDialogComponent;
  let fixture: ComponentFixture<ExterioresDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExterioresDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExterioresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

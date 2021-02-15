import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFCDialogComponent } from './afcdialog.component';

describe('AFCDialogComponent', () => {
  let component: AFCDialogComponent;
  let fixture: ComponentFixture<AFCDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFCDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFCDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

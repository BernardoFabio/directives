import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadSocialDialogComponent } from './seguridad-social-dialog.component';

describe('SeguridadSocialDialogComponent', () => {
  let component: SeguridadSocialDialogComponent;
  let fixture: ComponentFixture<SeguridadSocialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadSocialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadSocialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

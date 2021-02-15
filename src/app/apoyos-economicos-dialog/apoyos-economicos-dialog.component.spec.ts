import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyosEconomicosDialogComponent } from './apoyos-economicos-dialog.component';

describe('ApoyosEconomicosDialogComponent', () => {
  let component: ApoyosEconomicosDialogComponent;
  let fixture: ComponentFixture<ApoyosEconomicosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyosEconomicosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyosEconomicosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

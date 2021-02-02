import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendentiDetailsComponent } from './dipendenti-details.component';

describe('DipendentiDetailsComponent', () => {
  let component: DipendentiDetailsComponent;
  let fixture: ComponentFixture<DipendentiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendentiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendentiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

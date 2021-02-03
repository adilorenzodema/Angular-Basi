import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendentiAddComponent } from './dipendenti-add.component';

describe('DipendentiAddComponent', () => {
  let component: DipendentiAddComponent;
  let fixture: ComponentFixture<DipendentiAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendentiAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendentiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

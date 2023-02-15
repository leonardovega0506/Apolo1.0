import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesFotoComponent } from './acciones-foto.component';

describe('AccionesFotoComponent', () => {
  let component: AccionesFotoComponent;
  let fixture: ComponentFixture<AccionesFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesReciboComponent } from './acciones-recibo.component';

describe('AccionesReciboComponent', () => {
  let component: AccionesReciboComponent;
  let fixture: ComponentFixture<AccionesReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

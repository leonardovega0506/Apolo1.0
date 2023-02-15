import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosReciboComponent } from './registros-recibo.component';

describe('RegistrosReciboComponent', () => {
  let component: RegistrosReciboComponent;
  let fixture: ComponentFixture<RegistrosReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

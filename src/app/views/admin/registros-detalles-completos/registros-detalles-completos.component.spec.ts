import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosDetallesCompletosComponent } from './registros-detalles-completos.component';

describe('RegistrosDetallesCompletosComponent', () => {
  let component: RegistrosDetallesCompletosComponent;
  let fixture: ComponentFixture<RegistrosDetallesCompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosDetallesCompletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosDetallesCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

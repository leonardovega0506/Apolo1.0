import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosComprasComponent } from './registros-compras.component';

describe('RegistrosComprasComponent', () => {
  let component: RegistrosComprasComponent;
  let fixture: ComponentFixture<RegistrosComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

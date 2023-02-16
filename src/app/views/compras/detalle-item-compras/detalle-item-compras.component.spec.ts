import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemComprasComponent } from './detalle-item-compras.component';

describe('DetalleItemComprasComponent', () => {
  let component: DetalleItemComprasComponent;
  let fixture: ComponentFixture<DetalleItemComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleItemComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleItemComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProductoComprasComponent } from './asignar-producto-compras.component';

describe('AsignarProductoComprasComponent', () => {
  let component: AsignarProductoComprasComponent;
  let fixture: ComponentFixture<AsignarProductoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProductoComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProductoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItemComprasComponent } from './agregar-item-compras.component';

describe('AgregarItemComprasComponent', () => {
  let component: AgregarItemComprasComponent;
  let fixture: ComponentFixture<AgregarItemComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarItemComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarItemComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

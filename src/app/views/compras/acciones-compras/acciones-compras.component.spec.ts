import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesComprasComponent } from './acciones-compras.component';

describe('AccionesComprasComponent', () => {
  let component: AccionesComprasComponent;
  let fixture: ComponentFixture<AccionesComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

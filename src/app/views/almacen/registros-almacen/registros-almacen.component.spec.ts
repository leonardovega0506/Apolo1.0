import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosAlmacenComponent } from './registros-almacen.component';

describe('RegistrosAlmacenComponent', () => {
  let component: RegistrosAlmacenComponent;
  let fixture: ComponentFixture<RegistrosAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

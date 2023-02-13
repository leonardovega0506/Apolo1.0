import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProductoAdminComponent } from './asignar-producto-admin.component';

describe('AsignarProductoAdminComponent', () => {
  let component: AsignarProductoAdminComponent;
  let fixture: ComponentFixture<AsignarProductoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProductoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

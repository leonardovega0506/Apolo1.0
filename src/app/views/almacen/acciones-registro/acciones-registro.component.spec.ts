import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesRegistroComponent } from './acciones-registro.component';

describe('AccionesRegistroComponent', () => {
  let component: AccionesRegistroComponent;
  let fixture: ComponentFixture<AccionesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

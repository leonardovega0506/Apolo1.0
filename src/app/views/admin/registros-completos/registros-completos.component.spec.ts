import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosCompletosComponent } from './registros-completos.component';

describe('RegistrosCompletosComponent', () => {
  let component: RegistrosCompletosComponent;
  let fixture: ComponentFixture<RegistrosCompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosCompletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

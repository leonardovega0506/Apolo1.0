import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReciboComponent } from './dashboard-recibo.component';

describe('DashboardReciboComponent', () => {
  let component: DashboardReciboComponent;
  let fixture: ComponentFixture<DashboardReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

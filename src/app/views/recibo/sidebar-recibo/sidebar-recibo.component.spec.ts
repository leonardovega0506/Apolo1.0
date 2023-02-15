import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarReciboComponent } from './sidebar-recibo.component';

describe('SidebarReciboComponent', () => {
  let component: SidebarReciboComponent;
  let fixture: ComponentFixture<SidebarReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

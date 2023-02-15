import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAlmacenComponent } from './sidebar-almacen.component';

describe('SidebarAlmacenComponent', () => {
  let component: SidebarAlmacenComponent;
  let fixture: ComponentFixture<SidebarAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

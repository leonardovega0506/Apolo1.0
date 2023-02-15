import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFotoComponent } from './sidebar-foto.component';

describe('SidebarFotoComponent', () => {
  let component: SidebarFotoComponent;
  let fixture: ComponentFixture<SidebarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

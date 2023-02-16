import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComprasComponent } from './items-compras.component';

describe('ItemsComprasComponent', () => {
  let component: ItemsComprasComponent;
  let fixture: ComponentFixture<ItemsComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

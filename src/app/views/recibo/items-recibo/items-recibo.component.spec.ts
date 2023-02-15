import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReciboComponent } from './items-recibo.component';

describe('ItemsReciboComponent', () => {
  let component: ItemsReciboComponent;
  let fixture: ComponentFixture<ItemsReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

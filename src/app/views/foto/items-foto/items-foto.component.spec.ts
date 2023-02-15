import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFotoComponent } from './items-foto.component';

describe('ItemsFotoComponent', () => {
  let component: ItemsFotoComponent;
  let fixture: ComponentFixture<ItemsFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

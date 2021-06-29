import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemMMComponent } from './shop-item-mm.component';

describe('ShopItemMMComponent', () => {
  let component: ShopItemMMComponent;
  let fixture: ComponentFixture<ShopItemMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsMMComponent } from './shop-details-mm.component';

describe('ShopDetailsMMComponent', () => {
  let component: ShopDetailsMMComponent;
  let fixture: ComponentFixture<ShopDetailsMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailsMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

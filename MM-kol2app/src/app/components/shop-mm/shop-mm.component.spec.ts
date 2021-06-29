import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMMComponent } from './shop-mm.component';

describe('ShopMMComponent', () => {
  let component: ShopMMComponent;
  let fixture: ComponentFixture<ShopMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

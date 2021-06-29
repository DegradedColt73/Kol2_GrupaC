import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item-mm',
  templateUrl: './shop-item-mm.component.html',
  styleUrls: ['./shop-item-mm.component.css']
})
export class ShopItemMMComponent implements OnInit {

  @Input() image:string;
  @Input() text:string;
  @Input() id:number;
  @Input() title:string;
  @Input() price:number;

  constructor() { 
    this.image = '';
    this.text = '';
    this.id = 0;
    this.title = '';
    this.price = 0;
  }

  ngOnInit(): void {
  }
}
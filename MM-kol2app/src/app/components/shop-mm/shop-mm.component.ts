import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shop-mm',
  templateUrl: './shop-mm.component.html',
  styleUrls: ['./shop-mm.component.css']
})
export class ShopMMComponent implements OnInit {
  public items$:any;

  constructor(private service: DataService) { }

  ngOnInit():void{
    this.getAll();
  }

  getAll(){
    //@ts-ignore
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}

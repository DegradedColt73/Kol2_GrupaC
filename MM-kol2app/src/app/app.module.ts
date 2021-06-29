import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopMMComponent } from './components/shop-mm/shop-mm.component';
import { ShopItemMMComponent } from './components/shop-item-mm/shop-item-mm.component';
import { ShopDetailsMMComponent } from './components/shop-details-mm/shop-details-mm.component';
import { DataService } from './services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopMMComponent,
    ShopItemMMComponent,
    ShopDetailsMMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

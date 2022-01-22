import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { DiscountPipe} from './discount.pipe';
import { ChangeColorDirective} from './change-color.directive';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartComponent,
    FeedComponent,
    DiscountPipe,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

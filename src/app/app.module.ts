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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ProductComponent } from './product/product.component';





@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartComponent,
    FeedComponent,
    DiscountPipe,
    ChangeColorDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

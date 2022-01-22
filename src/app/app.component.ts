import { Component } from '@angular/core';
import { Item } from './item.interface';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    shoppingCart: Item[] = [];
    items: Item[] = [];

    item1: Item = {
      description: 'Dad print socks',
      imageUrl: `https://studionorman.co.il/wp-content/uploads/2020/10/184-1.png`,
      price: 89
    };
  
    item2: Item = {
      description: 'Dog print socks',
      imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/185-1.png',
      price: 89
    };
  
    item3: Item = {
      description: 'Dog print socks',
      imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/1811.png',
      price: 89
    };
  
    item4: Item = {
      description: 'Child print socks',
      imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/182-2.png',
      price: 89
    };

    constructor(private cartService: CartService){
      this.items = [this.item1, this.item2, this.item3, this.item4];
    }

    addToCart(item: Item): void{
      this.cartService.addToCart(item);
    }

    isInCart(item: Item): boolean {
      return this.cartService.isInCart(item);
    }

    removeFromCart(item: Item): void{
      this.cartService.removeFromCart(item);
    }
}

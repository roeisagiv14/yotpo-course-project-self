import { Component, OnInit} from '@angular/core';
import { Item, Item2 } from './item.interface';
import { CartService } from './cart.service'
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
    shoppingCart: Item[] = [];
    items: Item[] = [];
    item2 = new Item2('New Item', 600);

    constructor(private cartService: CartService, private postsService: PostsService){
      
      this.postsService.getFeed().subscribe((result) => {

        this.items = result;
      });
    }

    // item1: Item = {
    //   description: 'Dad print socks',
    //   imageUrl: `https://studionorman.co.il/wp-content/uploads/2020/10/184-1.png`,
    //   price: 89
    // };
  
    // item2: Item = {
    //   description: 'Dog print socks',
    //   imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/185-1.png',
    //   price: 89
    // };
  
    // item3: Item = {
    //   description: 'Dog print socks',
    //   imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/1811.png',
    //   price: 89
    // };
  
    // item4: Item = {
    //   description: 'Child print socks',
    //   imageUrl: 'https://studionorman.co.il/wp-content/uploads/2020/10/182-2.png',
    //   price: 89
    // };

    ngOnInit(): void {
        this.postsService.getFeed().subscribe((result) => {
          this.items = result;
        });
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

    addPost(){
      const item: Item = {
        userId: 1,
        title: 'New Post!',
        body: 'The ecommerce web site is revolve'
      }

      this.postsService.addPost(item).subscribe((item: Item) => this.items.unshift(item));

    }
    
    updatePost(){

      const newItem: Item = {
        userId: 1,
        title: 'Update post id1 to this!',
        body: 'The ecommerce web site is revolve'
      }
      this.postsService.updatePost(1, newItem).subscribe(itemFromServer => {
        this.items = this.items.map(item => {
          if(item.id === 1) {
            return itemFromServer;
          }
          return item;
        })
  
        // const index = this.items.findIndex((item:Item) => item.id === 1);
        // this.items[index] = itemFromServer;
      });
  
  
    }
  
    filterPosts(userId: number) {
      this.postsService.getAllUserPosts(userId).subscribe((items: Item[]) => this.items = items);
    }
}

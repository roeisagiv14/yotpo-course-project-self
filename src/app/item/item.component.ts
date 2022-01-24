import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Item} from "../item.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent{

  @Input() item: Item | null = null;
  @Input() isInCart: boolean = false;

  @Output() addToCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();
  @Output() removeFromCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();

  today = Date.now();

  addToCartClicked(){
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked(){
    this.removeFromCart.emit(this.item);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProduct(){
    this.router.navigateByUrl(`/product/${this.item?.id}`)
  }

  // ngAfterViewChecked(): void {
  //   console.log('After view checked');
  // }

}

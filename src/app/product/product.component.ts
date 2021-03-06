import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Item } from '../item.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item | null = null;
  loading: boolean = false;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data: Data) => {this.item = data[0];
    
    });
  }

}

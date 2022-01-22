import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private httpClient: HttpClient) {}

    getFeed(): Observable<Item[]> {
      
      return this.httpClient.get<Item[]>(this.URL).pipe(map((items: Item[]) => items.map(item => ({...item, imageUrl: `https://studionorman.co.il/wp-content/uploads/2020/10/185-1.png`, price: 500}))));
  } 
}

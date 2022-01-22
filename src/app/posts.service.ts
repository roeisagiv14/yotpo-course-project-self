import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private httpClient: HttpClient) {}

    getFeed(): Observable<Item[]> {
      
      return this.httpClient.get<Item[]>(this.URL);
  } 
}

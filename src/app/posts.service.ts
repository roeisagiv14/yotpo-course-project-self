import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  addPost(item: Item): Observable<Item>{
    const body = {
      userId: item.userId,
      body: item.body,
      title: item.title
    };

    return this.httpClient.post<Item>(this.URL, body);
  }

  updatePost(id: number, item: Item) {
    const body = {
      userId: item.userId,
      body: item.body,
      title: item.title
    }

    return this.httpClient.put<Item>(`${this.URL}/${id}`, body)
  }

  getAllUserPosts(userId: number){

    let params: HttpParams = new HttpParams();
    params = params.append('userId', userId);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', 'BLABLABLA');

    return this.httpClient.get<Item[]>(this.URL, {params, headers});
  }
}

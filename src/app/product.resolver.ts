import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Item } from './item.interface';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Item> {
  constructor(private postsService: PostsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = route.params['id'];
    return this.postsService.getPostById(id).pipe(delay(3000))
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<boolean> {
  constructor(private postsService: PostsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}

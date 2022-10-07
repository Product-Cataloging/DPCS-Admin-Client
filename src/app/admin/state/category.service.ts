import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { Category } from '../models/category.model';
import { CategoryStore } from './category.store';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor(private store: CategoryStore, private http: HttpClient) {
  }

  categories: Category[] = [
    { id: 1, name: 'abcd', description: 'this is some description' },
    { id: 2, name: 'efg', description: 'this is some description for efg', parent_id: 1 },
    { id: 3, name: 'hij', description: 'this is some description for hij', parent_id: 2 },
    { id: 4, name: 'klm', description: 'this is some description for klm', parent_id: 1 },
    { id: 5, name: 'nop', description: 'this is some description for nop', parent_id: 1 },
    { id: 6, name: 'qrst', description: 'this is some description for qrst' },
  ]
  get() {
    // return this.http.get<Category[]>('https://api.com').pipe(tap(entities => {
    //   this.categoryStore.set(entities);
    // }));

    return this.store.set(this.categories);
  }

  add(category: Category) {
    this.store.add(category);
    const url = `${environment.apiUrl}/categories`;
    this.store.add(category)//remove when connected with api
    return UtilService.add(url, { payload: category }, this.http, this.store);
    // return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: supplier})
  }

  update(id: number, category: Partial<Category>) {
    const url = `${environment.apiUrl}/categories`;
    this.store.update(id, category);
    return UtilService.update(url, { payload: category }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

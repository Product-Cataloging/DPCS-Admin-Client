import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
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
  }

  update(id: number, category: Partial<Category>) {
    this.store.update(id, category);
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

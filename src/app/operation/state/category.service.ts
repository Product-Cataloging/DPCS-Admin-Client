import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { CategoryStore } from './category.store';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor(private categoryStore: CategoryStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Category[]>('https://api.com').pipe(tap(entities => {
      this.categoryStore.set(entities);
    }));
  }

  add(category: Category) {
    this.categoryStore.add(category);
  }

  update(id, category: Partial<Category>) {
    this.categoryStore.update(id, category);
  }

  remove(id: ID) {
    this.categoryStore.remove(id);
  }

}

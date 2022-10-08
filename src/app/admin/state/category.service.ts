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

  get() {
    const url = `${environment.apiUrl}/category`;
    return this.http.get(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            let data = result.data;
            let response: Category[] = [];
            for (const key in data) {
              if (data[key].children.length > 0) {
                data[key].children.forEach((category: any) => {
                  response.push(category);
                });
              }
            }
            this.store.set(response);
          } else {
            console.log(result.error);
          }
        }, error => {
          console.log(error.message)
        })
      );
  }

  add(category: Category) {
    const url = `${environment.apiUrl}/category`;
    return UtilService.add(url, { payload: category }, this.http, this.store);
  }

  update(id: number, category: Partial<Category>) {
    const url = `${environment.apiUrl}/category/${id}`;
    return UtilService.update(url, { payload: category }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

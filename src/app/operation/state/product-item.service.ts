import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { ProductItem } from '../models/product-item.model';
import { ProductItemStore } from './product-item.store';

@Injectable({ providedIn: 'root' })
export class ProductItemService {

  constructor(private productItemStore: ProductItemStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<ProductItem[]>('https://api.com').pipe(tap(entities => {
      this.productItemStore.set(entities);
    }));
  }

  add(productItem: ProductItem) {
    this.productItemStore.add(productItem);
  }

  update(id, productItem: Partial<ProductItem>) {
    this.productItemStore.update(id, productItem);
  }

  remove(id: ID) {
    this.productItemStore.remove(id);
  }

}

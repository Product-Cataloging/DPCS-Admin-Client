import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { ProductItem } from '../models/product-item.model';
import { ProductItemStore } from './product-item.store';

@Injectable({ providedIn: 'root' })
export class ProductItemService {

  constructor(private store: ProductItemStore, private http: HttpClient) {
  }

  product_items: ProductItem[] = [
    { id: 1, product_image: 'http://image.com', color: 'red', size: 'large', price: 100, currency_id: 1, unit_of_measure_id: 1, product_id: 1 },
    { id: 2, product_image: 'http://image.com', color: 'gray', size: 'small', price: 40, currency_id: 2, unit_of_measure_id: 1, product_id: 1 },
    { id: 3, product_image: 'http://image.com', color: 'green', size: 'large', price: 100, currency_id: 1, unit_of_measure_id: 2, product_id: 1 },
    { id: 4, product_image: 'http://image.com', color: 'blue', size: 'medium', price: 60, currency_id: 3, unit_of_measure_id: 2, product_id: 1 },
    { id: 5, product_image: 'http://image.com', color: 'green', size: 'medium', price: 60, currency_id: 1, unit_of_measure_id: 1, product_id: 1 },
  ]

  get(id: number) {
    this.store.set(this.product_items);
    // return this.http.get<ProductItem[]>('https://api.com').pipe(tap(entities => {
    //   this.productItemStore.set(entities);
    // }));
  }

  add(productItem: ProductItem) {
    this.store.add(productItem);
  }

  update(id: number, productItem: Partial<ProductItem>) {
    this.store.update(id, productItem);
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

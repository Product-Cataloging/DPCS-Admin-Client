import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { ProductItem } from '../models/product-item.model';
import { ProductItemStore } from './product-item.store';

@Injectable({ providedIn: 'root' })
export class ProductItemService {

  constructor(private store: ProductItemStore, private http: HttpClient) {
  }

  product_items: ProductItem[] = [
    { id: 1, dimensions: '2*4*5', color: 'red', material: 'stainless steel', unit_id: 1, product_id: 1 },
    { id: 2, dimensions: '4*4*4', color: 'gray', material: 'wood', unit_id: 1, product_id: 1 },
    { id: 3, dimensions: '5*4*5', color: 'green', material: 'stainless steel', unit_id: 2, product_id: 1 },
    { id: 4, dimensions: '10*6*6', color: 'blue', material: 'glass', unit_id: 2, product_id: 1 },
    { id: 5, dimensions: '3*4*7', color: 'green', material: 'glass', unit_id: 1, product_id: 1 },
  ]

  get(id: number) {
    this.store.set(this.product_items);
    // return this.http.get<ProductItem[]>('https://api.com').pipe(tap(entities => {
    //   this.productItemStore.set(entities);
    // }));
  }

  add(productItem: ProductItem) {
    const url = `${environment.apiUrl}/product-items`;
    this.store.add(productItem)//remove when connected with api
    return UtilService.add(url, { payload: productItem }, this.http, this.store);
    // return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: supplier})
  }

  update(id: number, productItem: Partial<ProductItem>) {
    const url = `${environment.apiUrl}/product-items`;
    this.store.update(id, productItem);
    return UtilService.update(url, { payload: productItem }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

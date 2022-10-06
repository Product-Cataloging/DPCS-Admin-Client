import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private store: ProductStore, private http: HttpClient) {
  }

  products: Product[] = [
    { id: 1, name: 'product 1', description: 'this is description for product 1', category_id: 1, supplier_id: 1 },
    { id: 2, name: 'product 2', description: 'this is description for product 2', category_id: 2, supplier_id: 2 },
    { id: 3, name: 'product 3', description: 'this is description for product 3', category_id: 3, supplier_id: 2 },
    { id: 4, name: 'product 4', description: 'this is description for product 4', category_id: 1, supplier_id: 1 },
    { id: 5, name: 'product 5', description: 'this is description for product 5', category_id: 1, supplier_id: 2 },
    { id: 6, name: 'product 6', description: 'this is description for product 6', category_id: 3, supplier_id: 1 },
    { id: 7, name: 'product 7', description: 'this is description for product 7', category_id: 1, supplier_id: 1 },
  ]

  get() {
    // return this.http.get<Product[]>('https://api.com').pipe(tap(entities => {
    //   this.store.set(entities);
    // }));

    this.store.set(this.products)
  }

  add(product: Product) {
    const url = `${environment.apiUrl}/products`;
    this.store.add(product)//remove when connected with api
    return UtilService.add(url, { payload: product }, this.http, this.store);
    // return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: supplier})
  }

  update(id: number, product: Partial<Product>) {
    const url = `${environment.apiUrl}/products`;
    this.store.update(id, product);
    return UtilService.update(url, { payload: product }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

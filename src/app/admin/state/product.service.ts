import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private store: ProductStore, private http: HttpClient) {
  }

  get() {
    const url = `${environment.apiUrl}/products`;
    return UtilService.get(url, this.http, this.store);
  }

  add(product: Product) {
    const url = `${environment.apiUrl}/products`;
    return UtilService.add(url, { payload: product }, this.http, this.store);
  }

  update(id: number, product: Partial<Product>) {
    const url = `${environment.apiUrl}/products/${id}`;
    return UtilService.update(url, { payload: product }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

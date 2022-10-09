import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { ProductItem } from '../models/product-item.model';
import { ProductItemStore } from './product-item.store';

@Injectable({ providedIn: 'root' })
export class ProductItemService {

  constructor(private store: ProductItemStore, private http: HttpClient) {
  }

  get(productId: number) {
    const url = `${environment.apiUrl}/product/items/${productId}`;
    return UtilService.get(url, this.http, this.store);
  }

  add(productItem: ProductItem) {
    const url = `${environment.apiUrl}/product_items`;
    return UtilService.add(url, { payload: productItem }, this.http, this.store);
  }

  update(productId: number, productItem: Partial<ProductItem>) {
    const url = `${environment.apiUrl}/product_items/${productId}`;
    return UtilService.update(url, { payload: productItem }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

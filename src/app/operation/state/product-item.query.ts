import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductItemStore, ProductItemState } from './product-item.store';

@Injectable({ providedIn: 'root' })
export class ProductItemQuery extends QueryEntity<ProductItemState> {

  constructor(protected override store: ProductItemStore) {
    super(store);
  }

}

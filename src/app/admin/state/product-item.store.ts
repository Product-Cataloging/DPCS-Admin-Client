import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ProductItem } from '../models/product-item.model';

export interface ProductItemState extends EntityState<ProductItem> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product-item' })
export class ProductItemStore extends EntityStore<ProductItemState> {

  constructor() {
    super();
  }

}

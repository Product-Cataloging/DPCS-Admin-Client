import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Quotation } from '../models/quotation.model';

export interface QuotationState extends EntityState<Quotation> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'quotation' })
export class QuotationStore extends EntityStore<QuotationState> {

  constructor() {
    super();
  }

}

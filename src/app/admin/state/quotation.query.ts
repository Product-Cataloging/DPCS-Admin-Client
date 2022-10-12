import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuotationStore, QuotationState } from './quotation.store';

@Injectable({ providedIn: 'root' })
export class QuotationQuery extends QueryEntity<QuotationState> {

  constructor(protected override store: QuotationStore) {
    super(store);
  }

}

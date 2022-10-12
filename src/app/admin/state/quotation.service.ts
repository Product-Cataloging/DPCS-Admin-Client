import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Quotation } from '../models/quotation.model';
import { QuotationStore } from './quotation.store';

@Injectable({ providedIn: 'root' })
export class QuotationService {

  constructor(private quotationStore: QuotationStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Quotation[]>('https://api.com').pipe(tap(entities => {
      this.quotationStore.set(entities);
    }));
  }

  add(quotation: Quotation) {
    this.quotationStore.add(quotation);
  }

  update(id: number, quotation: Partial<Quotation>) {
    this.quotationStore.update(id, quotation);
  }

  remove(id: ID) {
    this.quotationStore.remove(id);
  }

}

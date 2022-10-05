import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Currency } from '../models/currency.model';
import { CurrencyStore } from './currency.store';

@Injectable({ providedIn: 'root' })
export class CurrencyService {

  constructor(private currencyStore: CurrencyStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Currency[]>('https://api.com').pipe(tap(entities => {
      this.currencyStore.set(entities);
    }));
  }

  add(currency: Currency) {
    this.currencyStore.add(currency);
  }

  update(id, currency: Partial<Currency>) {
    this.currencyStore.update(id, currency);
  }

  remove(id: ID) {
    this.currencyStore.remove(id);
  }

}

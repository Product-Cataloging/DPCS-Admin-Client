import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Currency } from '../models/currency.model';
import { CurrencyStore } from './currency.store';

@Injectable({ providedIn: 'root' })
export class CurrencyService {

  constructor(private store: CurrencyStore, private http: HttpClient) {
  }

  currencies: Currency[] = [
    { id: 1, name: 'US Dollar', alias: "USD" },
    { id: 2, name: 'Euro', alias: "EUR" },
    { id: 3, name: 'Pound Sterling', alias: "GBP" },
  ]

  get() {
    // return this.http.get<Currency[]>('https://api.com').pipe(tap(entities => {
    //   this.store.set(entities);
    // }));

    this.store.set(this.currencies)
  }

  add(currency: Currency) {
    this.store.add(currency);
  }

  update(id: number, currency: Partial<Currency>) {
    this.store.update(id, currency);
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

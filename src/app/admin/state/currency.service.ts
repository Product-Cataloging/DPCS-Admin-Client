import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { Currency } from '../models/currency.model';
import { CurrencyStore } from './currency.store';

@Injectable({ providedIn: 'root' })
export class CurrencyService {

  constructor(private store: CurrencyStore, private http: HttpClient) {
  }

  get() {
    const url = `${environment.apiUrl}/currencies`;
    return UtilService.get(url, this.http, this.store);
  }

  // add(currency: Currency) {
  //   const url = `${environment.apiUrl}/currencies`;
  //   return UtilService.add(url, { payload: currency }, this.http, this.store);
  // }

  update(id: number, currency: Partial<Currency>) {
    const url = `${environment.apiUrl}/currencies`;
    return UtilService.update(url, { payload: currency }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

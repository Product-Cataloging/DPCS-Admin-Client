import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { Supplier } from '../models/supplier.model';
import { SupplierStore } from './supplier.store';

@Injectable({ providedIn: 'root' })
export class SupplierService {

  constructor(private store: SupplierStore, private http: HttpClient) {
  }

  suppliers: Supplier[] = [
    { id: 1, name: 'abcd', description: 'some description', address_line_1: 'address 1', address_line_2: 'address 2', primary_phone_number: '091232342343', secondary_phone_number: '091938692345', postal_code: '0001', email: 'someemail@gmail.com', fax: '234234' },
    { id: 2, name: 'efg', description: 'some description', address_line_1: 'address 1', address_line_2: 'address 2', primary_phone_number: '091232342343', secondary_phone_number: '091938692345', postal_code: '0001', email: 'someemail@gmail.com', fax: '234234' },
    { id: 3, name: 'hij', description: 'some description', address_line_1: 'address 1', address_line_2: 'address 2', primary_phone_number: '091232342343', secondary_phone_number: '091938692345', postal_code: '0001', email: 'someemail@gmail.com', fax: '234234' },
    { id: 4, name: 'klm', description: 'some description', address_line_1: 'address 1', address_line_2: 'address 2', primary_phone_number: '091232342343', secondary_phone_number: '091938692345', postal_code: '0001', email: 'someemail@gmail.com', fax: '234234' },
  ]

  get() {
    return this.store.set(this.suppliers);
    // return this.http.get<Supplier[]>('https://api.com').pipe(tap(entities => {
    //   this.store.set(entities);
    // }));
  }

  add(supplier: Supplier) {
    const url = `${environment.apiUrl}/suppliers`;
    this.store.add(supplier)//remove when connected with api
    return UtilService.add(url, { payload: supplier }, this.http, this.store);
    // return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: supplier})
  }

  update(id: number, supplier: Partial<Supplier>) {
    const url = `${environment.apiUrl}/suppliers`;
    this.store.update(id, supplier);
    return UtilService.update(url, { payload: supplier }, this.http, this.store)
  }

  // remove(id: ID) {
  //   this.store.remove(id);
  // }

}

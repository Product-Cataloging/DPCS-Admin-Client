import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Supplier } from '../models/supplier.model';
import { SupplierStore } from './supplier.store';

@Injectable({ providedIn: 'root' })
export class SupplierService {

  constructor(private store: SupplierStore, private http: HttpClient) {
  }

  suppliers = [
    { id: 1, name: 'abcd' },
    { id: 2, name: 'efg' },
    { id: 3, name: 'hij' },
    { id: 4, name: 'klm' },
  ]

  get() {
    return this.store.set(this.suppliers);
    // return this.http.get<Supplier[]>('https://api.com').pipe(tap(entities => {
    //   this.store.set(entities);
    // }));
  }

  add(supplier: Supplier) {
    this.store.add(supplier);
  }

  update(id: number, supplier: Partial<Supplier>) {
    this.store.update(id, supplier);
  }

  // remove(id: ID) {
  //   this.store.remove(id);
  // }

}

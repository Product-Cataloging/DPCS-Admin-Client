import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Supplier } from '../models/supplier.model';
import { SupplierStore } from './supplier.store';

@Injectable({ providedIn: 'root' })
export class SupplierService {

  constructor(private supplierStore: SupplierStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Supplier[]>('https://api.com').pipe(tap(entities => {
      this.supplierStore.set(entities);
    }));
  }

  add(supplier: Supplier) {
    this.supplierStore.add(supplier);
  }

  update(id, supplier: Partial<Supplier>) {
    this.supplierStore.update(id, supplier);
  }

  remove(id: ID) {
    this.supplierStore.remove(id);
  }

}

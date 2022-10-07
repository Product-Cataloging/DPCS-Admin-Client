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

  get() {
    const url = `${environment.apiUrl}/suppliers`;
    return UtilService.get(url, this.http, this.store);
  }

  add(supplier: Supplier) {
    const url = `${environment.apiUrl}/suppliers`;
    return UtilService.add(url, { payload: supplier }, this.http, this.store);
  }

  update(id: number, supplier: Partial<Supplier>) {
    const url = `${environment.apiUrl}/suppliers`;
    return UtilService.update(url, { payload: supplier }, this.http, this.store)
  }

  // remove(id: ID) {
  //   this.store.remove(id);
  // }

}

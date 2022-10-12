import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { Quotation } from '../models/quotation.model';
import { QuotationStore } from './quotation.store';

@Injectable({ providedIn: 'root' })
export class QuotationService {

  constructor(private store: QuotationStore, private http: HttpClient) {
  }

  get() {
    const url = `${environment.apiUrl}/quotations`;
    return UtilService.get(url, this.http, this.store);
  }

  // add(quotation: Quotation) {
  //   this.store.add(quotation);
  // }

  // update(id: number, quotation: Partial<Quotation>) {
  //   this.store.update(id, quotation);
  // }

  // remove(id: ID) {
  //   this.store.remove(id);
  // }

}

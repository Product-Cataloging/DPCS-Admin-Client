import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { UnitOfMeasure } from '../models/unit-of-measure.model';
import { UnitOfMeasureStore } from './unit-of-measure.store';

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService {

  constructor(private store: UnitOfMeasureStore, private http: HttpClient) {
  }

  get() {
    const url = `${environment.apiUrl}/unit_of_measures`;
    return UtilService.get(url, this.http, this.store);
  }

  // add(unitOfMeasure: UnitOfMeasure) {
  //   this.store.add(unitOfMeasure);
  // }

  update(id: number, unitOfMeasure: Partial<UnitOfMeasure>) {
    const url = `${environment.apiUrl}/unit_of_measures`;
    return UtilService.update(url, { payload: unitOfMeasure }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UnitOfMeasure } from '../models/unit-of-measure.model';
import { UnitOfMeasureStore } from './unit-of-measure.store';

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService {

  constructor(private unitOfMeasureStore: UnitOfMeasureStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<UnitOfMeasure[]>('https://api.com').pipe(tap(entities => {
      this.unitOfMeasureStore.set(entities);
    }));
  }

  add(unitOfMeasure: UnitOfMeasure) {
    this.unitOfMeasureStore.add(unitOfMeasure);
  }

  update(id, unitOfMeasure: Partial<UnitOfMeasure>) {
    this.unitOfMeasureStore.update(id, unitOfMeasure);
  }

  remove(id: ID) {
    this.unitOfMeasureStore.remove(id);
  }

}

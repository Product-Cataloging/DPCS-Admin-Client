import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { UnitOfMeasure } from '../models/unit-of-measure.model';
import { UnitOfMeasureStore } from './unit-of-measure.store';

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService {

  constructor(private store: UnitOfMeasureStore, private http: HttpClient) {
  }

  units_of_measure: UnitOfMeasure[] = [
    { id: 1, name: 'Kilogram', abbreviation: "Kg" },
    { id: 2, name: 'Centimeter', abbreviation: "Cm" },
    { id: 3, name: 'Litre', abbreviation: "Lr" },
  ]

  get() {
    // return this.http.get<UnitOfMeasure[]>('https://api.com').pipe(tap(entities => {
    //   this.store.set(entities);
    // }));
    this.store.set(this.units_of_measure);
  }

  add(unitOfMeasure: UnitOfMeasure) {
    this.store.add(unitOfMeasure);
  }

  update(id: number, unitOfMeasure: Partial<UnitOfMeasure>) {
    const url = `${environment.apiUrl}/currencies`;
    this.store.update(id, unitOfMeasure);
    return UtilService.update(url, { payload: unitOfMeasure }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

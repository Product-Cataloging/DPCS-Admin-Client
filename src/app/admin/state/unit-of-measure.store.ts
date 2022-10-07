import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UnitOfMeasure } from '../models/unit-of-measure.model';

export interface UnitOfMeasureState extends EntityState<UnitOfMeasure> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'unit_of_measure' })
export class UnitOfMeasureStore extends EntityStore<UnitOfMeasureState> {

  constructor() {
    super();
  }

}

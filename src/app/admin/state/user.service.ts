import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from '../../shared/services/util.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private store: UserStore, private http: HttpClient) {
  }

  get() {
    const url = `${environment.apiUrl}/users`;
    return UtilService.get(url, this.http, this.store);
  }

  add(user: User) {
    const url = `${environment.apiUrl}/sign_up`;
    return UtilService.add(url, { payload: user }, this.http, this.store);
  }

  // update(id: number, user: Partial<User>) {
  //   const url = `${environment.apiUrl}/users/${id}`;
  //   return UtilService.update(url, { payload: user }, this.http, this.store);
  // }

  remove(id: ID) {
    this.store.remove(id);
  }

}

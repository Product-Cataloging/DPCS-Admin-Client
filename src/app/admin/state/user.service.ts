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

  users: User[] = [
    { id: 1, email: 'email1@gmail.com', password: '12345678', user_role: 'admin' },
    { id: 2, email: 'email2@gmail.com', password: '12345678', user_role: 'operator' },
    { id: 3, email: 'email3@gmail.com', password: '12345678', user_role: 'operator' },
    { id: 4, email: 'email4@gmail.com', password: '12345678', user_role: 'operator' },
    { id: 5, email: 'email5@gmail.com', password: '12345678', user_role: 'operator' },
    { id: 6, email: 'email6@gmail.com', password: '12345678', user_role: 'operator' },
  ]

  get() {
    // return this.http.get<User[]>('https://api.com').pipe(tap(entities => {
    //   this.userStore.set(entities);
    // }));

    this.store.set(this.users);
  }

  add(user: User) {
    const url = `${environment.apiUrl}/products`;
    this.store.add(user)//remove when connected with api
    return UtilService.add(url, { payload: user }, this.http, this.store);
    // return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: supplier})
  }

  update(id: number, user: Partial<User>) {
    const url = `${environment.apiUrl}/products`;
    this.store.update(id, user);
    return UtilService.update(url, { payload: user }, this.http, this.store)
  }

  remove(id: ID) {
    this.store.remove(id);
  }

}

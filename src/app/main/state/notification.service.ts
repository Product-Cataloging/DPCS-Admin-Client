import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/notification.model';
import { NotificationStore } from './notification.store';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private store: NotificationStore, private http: HttpClient) {
  }


  get() {
    const url = `${environment.apiUrl}/unread_notification`;
    return UtilService.get(url, this.http, this.store);
  }

  // add(notification: Notification) {
  //   this.notificationStore.add(notification);
  // }

  update(id: number, notification: Partial<Notification>) {
    const url = `${environment.apiUrl}/notifications/${id}`;
    return UtilService.update(url, { payload: notification }, this.http, this.store)
  }

  // remove(id: ID) {
  //   this.notificationStore.remove(id);
  // }

}

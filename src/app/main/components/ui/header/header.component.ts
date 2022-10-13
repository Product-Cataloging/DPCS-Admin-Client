import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../.././../models/notification.model';
import { NotificationQuery } from '../.././../state/notification.query';
import { NotificationService } from '../../../state/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_type: string | null = null;
  @Output() signOut = new EventEmitter();

  notifications$: Observable<Notification[]> = this.notificationQuery.selectAll();

  constructor(
    private notificationQuery: NotificationQuery,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user_type = localStorage.getItem('user_type');
    this.notificationService.get().subscribe();
  }

  onSignOut() {
    this.signOut.emit();
  }

  onCloseNotification(notification: Notification) {
    this.notificationService.update(notification.id, { status: 'Unread' }).subscribe();
  }

  onNotificationClick(notification: Notification) {
    console.log("read")
    console.log(notification)
  }
}

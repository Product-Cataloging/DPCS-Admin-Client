import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../.././../models/notification.model';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_type: string | null = null;
  @Output() signOut = new EventEmitter();
  @Output() markAsRead = new EventEmitter();

  @Input() notifications$: Observable<Notification[]> | null = null;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.user_type = localStorage.getItem('user_type');
  }

  onSignOut() {
    this.signOut.emit();
  }

  onCloseNotification(notification: Notification) {
    this.markAsRead.emit(notification.id);
  }

  onNotificationClick(notification: Notification) {
    const dialogRef = this.dialog.open(NotificationDetailsComponent, {
      width: '500px',
      data: notification,
      disableClose: true,
    });

    const closeNotification = (dialogRef.componentInstance as any).closeNotification.subscribe(() => {
      console.log("closed")
      this.markAsRead.emit(notification.id);
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      closeNotification.unsubscribe();
    });
  }
}

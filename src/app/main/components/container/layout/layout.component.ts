import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/main/models/notification.model';
import { NotificationQuery } from 'src/app/main/state/notification.query';
import { NotificationService } from 'src/app/main/state/notification.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  notifications$: Observable<Notification[]> = this.notificationQuery.selectAll();

  constructor(
    private router: Router,
    private notificationQuery: NotificationQuery,
    private notificationService: NotificationService,) { }

  ngOnInit(): void {
    this.notificationService.get().subscribe();
  }

  signOutUser() {
    localStorage.clear();
    this.router.navigate(['auth'])
  }

  markAsRead(id: number) {
    this.notificationService.update(id, { status: 'Read' }).subscribe();
  }
}

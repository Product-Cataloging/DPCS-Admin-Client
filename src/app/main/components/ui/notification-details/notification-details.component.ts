import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  @Output() closeNotification = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<NotificationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.closeNotification.emit();
  }
}

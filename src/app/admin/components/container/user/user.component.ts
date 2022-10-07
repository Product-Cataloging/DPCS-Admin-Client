import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { UserQuery } from '../../../state/user.query';
import { UserService } from '../../../state/user.service';
import { Column } from '../../../../shared/models/column.model';
import { UserFormComponent } from '../../ui/user-form/user-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'email', label: 'Email' },
    { name: 'user_role', label: 'User Role' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private dialog: MatDialog,
    private service: UserService,
    private query: UserQuery
  ) { }

  ngOnInit(): void {
    this.service.get();
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px',
      data: { id: null, email: '', password: '', user_role: null },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      this.service.add(data).subscribe()
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      submitForm.unsubscribe();
    });
  }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(UserFormComponent, {
        width: '500px',
        data: $event.item,
      });

      const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
        this.service.update($event.item.id, data).subscribe()
        dialogRef.close();
      });

      dialogRef.afterClosed().subscribe(() => {
        submitForm.unsubscribe();
      });
    }
  }
}

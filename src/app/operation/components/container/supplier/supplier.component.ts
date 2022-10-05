import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/operation/models/supplier.model';
import { SupplierQuery } from 'src/app/operation/state/supplier.query';
import { SupplierService } from 'src/app/operation/state/supplier.service';
import { Column } from 'src/app/shared/models/column.model';
import { SupplierFormComponent } from '../../ui/supplier-form/supplier-form.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers$: Observable<Supplier[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'name', label: 'Supplier Name' },
  ];

  actions: any[] = [
    { icon: 'add_circle', label: 'New', disabled: true }
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private dialog: MatDialog,
    private query: SupplierQuery,
    private service: SupplierService) {
  }

  ngOnInit(): void {
    this.service.get();
  }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(SupplierFormComponent, {
        width: '500px',
        data: $event.item,
      });

      const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
        console.log('The dialog was submitted');
        dialogRef.close();
      });

      dialogRef.afterClosed().subscribe(() => {
        submitForm.unsubscribe();
      });
    }
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(SupplierFormComponent, {
      width: '500px',
      data: { id: null, name: '' },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      console.log('The dialog was submitted');
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      submitForm.unsubscribe();
    });
  }
}

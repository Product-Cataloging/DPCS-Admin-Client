import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Supplier } from '../../../models/supplier.model';
import { SupplierQuery } from '../../../state/supplier.query';
import { SupplierService } from '../../../state/supplier.service';
import { Column } from '../../../../shared/models/column.model';
import { SupplierFormComponent } from '../../ui/supplier-form/supplier-form.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers$: Observable<Supplier[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'company_name', label: 'Company Name' },
    { name: 'email', label: 'Email' },
    { name: 'address_line', label: 'Address Line' },
    { name: 'primary_phone_number', label: 'Primary Phone Number' },
    { name: 'postal_code', label: 'Postal Code' },
    { name: 'fax', label: 'Fax' },
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
    this.service.get().subscribe();
  }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(SupplierFormComponent, {
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

  onNewClick(): void {
    const dialogRef = this.dialog.open(SupplierFormComponent, {
      width: '500px',
      data: {
        id: null,
        company_name: '',
        address_line: '',
        primary_phone_number: '',
        postal_code: '',
        email: '',
        fax: '',
      },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      this.service.add(data).subscribe();
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      submitForm.unsubscribe();
    });
  }
}

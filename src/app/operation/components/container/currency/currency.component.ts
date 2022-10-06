import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/operation/models/currency.model';
import { CurrencyQuery } from 'src/app/operation/state/currency.query';
import { CurrencyService } from 'src/app/operation/state/currency.service';
import { Column } from 'src/app/shared/models/column.model';
import { CurrencyFormComponent } from '../../ui/currency-form/currency-form.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  currencies$: Observable<Currency[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'name', label: 'Name' },
    { name: 'alias', label: 'Alias' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private dialog: MatDialog,
    private service: CurrencyService,
    private query: CurrencyQuery) { }

  ngOnInit(): void {
    this.service.get()
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(CurrencyFormComponent, {
      width: '500px',
      data: { id: null, name: '', alias: '' },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      this.service.add(data).subscribe();
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      submitForm.unsubscribe();
    });
  }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(CurrencyFormComponent, {
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

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UnitOfMeasure } from 'src/app/operation/models/unit-of-measure.model';
import { UnitOfMeasureQuery } from 'src/app/operation/state/unit-of-measure.query';
import { UnitOfMeasureService } from 'src/app/operation/state/unit-of-measure.service';
import { Column } from 'src/app/shared/models/column.model';
import { UnitOfMeasureFormComponent } from '../../ui/unit-of-measure-form/unit-of-measure-form.component';

@Component({
  selector: 'app-unit-of-measure',
  templateUrl: './unit-of-measure.component.html',
  styleUrls: ['./unit-of-measure.component.scss']
})
export class UnitOfMeasureComponent implements OnInit {

  units_of_measure$: Observable<UnitOfMeasure[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'name', label: 'Name' },
    { name: 'alias', label: 'Alias' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private dialog: MatDialog,
    private service: UnitOfMeasureService,
    private query: UnitOfMeasureQuery) { }

  ngOnInit(): void {
    this.service.get()
  }

  // onNewClick(): void {
  //   const dialogRef = this.dialog.open(UnitOfMeasureFormComponent, {
  //     width: '500px',
  //     data: { id: null, name: '', alias: '' },
  //   });

  //   const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
  //     this.service.add(data).subscribe();
  //     dialogRef.close();
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     submitForm.unsubscribe();
  //   });
  // }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(UnitOfMeasureFormComponent, {
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

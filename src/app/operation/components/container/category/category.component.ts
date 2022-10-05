import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Category } from 'src/app/operation/models/category.model';
import { CategoryQuery } from 'src/app/operation/state/category.query';
import { CategoryService } from 'src/app/operation/state/category.service';
import { Column } from 'src/app/shared/models/column.model';
import { CategoryFormComponent } from '../../ui/category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories$: Observable<Category[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'name', label: 'Supplier Name' },
    { name: 'description', label: 'Description' },
    { name: 'parent_id', label: 'Parent Category ID' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private dialog: MatDialog,
    private service: CategoryService,
    private query: CategoryQuery) { }

  ngOnInit(): void {
    this.service.get();
  }

  onNewClick() {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '500px',
      data: { id: null, name: '', description: '', parent_id: null },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      console.log('The dialog was submitted');
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      submitForm.unsubscribe();
    });
  }

  onClick($event: any) {
    if ($event.type === 'edit') {
      const dialogRef = this.dialog.open(CategoryFormComponent, {
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
}

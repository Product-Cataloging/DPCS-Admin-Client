import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/operation/models/product.model';
import { ProductQuery } from 'src/app/operation/state/product.query';
import { ProductService } from 'src/app/operation/state/product.service';
import { Column } from 'src/app/shared/models/column.model';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'name', label: 'Product Name' },
    { name: 'description', label: 'Description' },
    { name: 'category_id', label: 'Category ID' },
    { name: 'supplier_id', label: 'Supplier ID' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
    { icon: 'info', color: 'primary', tooltip: 'Items' },
  ];

  constructor(
    private dialog: MatDialog,
    private service: ProductService,
    private query: ProductQuery,
    private router: Router) { }

  ngOnInit(): void {
    this.service.get()
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '500px',
      data: { id: null, name: '', description: '', category_id: null, product_id: null },
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
      const dialogRef = this.dialog.open(ProductFormComponent, {
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
    else if ($event.type === 'info') {
      this.router.navigateByUrl(this.router.url + `/${$event.item.id}`)
    }
  }
}

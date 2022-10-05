import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/operation/models/product-item.model';
import { ProductItemQuery } from 'src/app/operation/state/product-item.query';
import { ProductItemService } from 'src/app/operation/state/product-item.service';
import { Column } from 'src/app/shared/models/column.model';
import { ProductItemFormComponent } from '../../ui/product-item-form/product-item-form.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product_id: number | null = null;

  product_items$: Observable<ProductItem[]> = this.query.selectAll();

  selectedItems: ProductItem[] = [];

  columns: Column[] = [
    { name: 'product_image', label: 'Product Image' },
    { name: 'color', label: 'Color' },
    { name: 'size', label: 'Size' },
    { name: 'price', label: 'Price' },
    { name: 'currency_id', label: 'Currency ID' },
    { name: 'unit_of_measure_id', label: 'Unit of Measure ID' },
  ];

  tableActions = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private service: ProductItemService,
    private query: ProductItemQuery) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.product_id = param['id'];
      this.service.get(param['id']);
    })
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(ProductItemFormComponent, {
      width: '500px',
      data: { id: null, product_image: '', color: '', size: '', price: null, currency_id: null, unit_of_measure_id: null },
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
      const dialogRef = this.dialog.open(ProductItemFormComponent, {
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

  onSelectProductItem($event: any) {
    this.selectedItems = $event;
  }

  onApprove() {
    console.log('selected items to be approved are: ');
    console.log(this.selectedItems);
  }

  onDecline() {
    console.log('selected items to be declined are: ');
    console.log(this.selectedItems);
  }
}

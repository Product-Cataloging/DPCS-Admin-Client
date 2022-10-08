import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from '../../../models/product-item.model';
import { ProductItemQuery } from '../../../state/product-item.query';
import { ProductItemService } from '../../../state/product-item.service';
import { Column } from '../../../../shared/models/column.model';
import { ProductItemFormComponent } from '../../ui/product-item-form/product-item-form.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  user_type: string | null = null;

  public product_id: number | null = null;

  product_items$: Observable<ProductItem[]> = this.query.selectAll();

  selectedItems: ProductItem[] = [];

  columns: Column[] = [
    { name: 'dimension', label: 'Dimension' },
    { name: 'color', label: 'Color' },
    { name: 'material', label: 'Material' },
    { name: 'capacity', label: 'Capacity' },
    { name: 'quantity', label: 'Quantity' },
    { name: 'price', label: 'Price' },
    { name: 'unit_of_measure_name', label: 'Unit of Measure Name' },
    { name: 'currency_name', label: 'Currency Name' },
    { name: 'supplier_company_name', label: 'Supplier Name' },
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
      this.service.get(param['id']).subscribe();
    })

    this.user_type = localStorage.getItem('user_type');
  }

  onNewClick(): void {
    const dialogRef = this.dialog.open(ProductItemFormComponent, {
      width: '500px',
      data: { id: null, dimension: '', color: '', material: '', capacity: '', unit_of_measure_id: null, quantity: null, price: null, currency_id: null, supplier_id: null },
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
      const dialogRef = this.dialog.open(ProductItemFormComponent, {
        width: '500px',
        data: $event.item,
      });

      const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
        this.service.update($event.item.id, data).subscribe();
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

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
    { name: 'packaging_unit', label: 'Packaging Unit' },
    { name: 'price', label: 'Price' },
    { name: 'currency_name', label: 'Currency Name' },
    { name: 'supplier_company_name', label: 'Supplier Name' },
    { name: 'status', label: 'Status' },
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
      data: { id: null, dimension: '', color: '', material: '', capacity: '', package_unit_id: null, price: null, currency_id: null, supplier_id: null },
    });

    const submitForm = (dialogRef.componentInstance as any).submitForm.subscribe((data: any) => {
      data.product_id = this.product_id;//add the product it to the product-item being added
      data.status = 'Waiting';//add waiting status to new product item being created
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

  onApproveProductItem(approveStatus: boolean) {
    let newStatus: 'Approved' | 'Declined' = approveStatus ? 'Approved' : 'Declined';
    this.selectedItems.forEach((item: ProductItem) => {
      this.service.update(item.id, { status: newStatus }).subscribe();
    });
    this.selectedItems = []
  }
}

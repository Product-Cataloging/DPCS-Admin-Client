import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Currency } from '../../../models/currency.model';
import { Supplier } from '../../../models/supplier.model';
import { CurrencyQuery } from '../../../state/currency.query';
import { CurrencyService } from '../../../state/currency.service';
import { SupplierQuery } from '../../../state/supplier.query';
import { SupplierService } from '../../../state/supplier.service';
import { ProductItem } from '../../../models/product-item.model';
import { UnitOfMeasure } from '../../../models/unit-of-measure.model';
import { UnitOfMeasureQuery } from '../../../state/unit-of-measure.query';
import { UnitOfMeasureService } from '../../../state/unit-of-measure.service';

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.scss']
})
export class ProductItemFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();
  package_units$: Observable<UnitOfMeasure[]> = this.unitOfMeasureQuery.selectAll();
  currencies$: Observable<Currency[]> = this.currencyQuery.selectAll();
  suppliers$: Observable<Supplier[]> = this.supplierQuery.selectAll();

  constructor(
    private unitOfMeasureQuery: UnitOfMeasureQuery,
    private unitOfMeasureService: UnitOfMeasureService,
    private currencyQuery: CurrencyQuery,
    private currencyService: CurrencyService,
    private supplierQuery: SupplierQuery,
    private supplierService: SupplierService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) {
    this.form = this.fb.group({
      color: [this.data.color],
      material: [this.data.material],
      dimension: [this.data.dimension],
      capacity: [this.data.capacity],
      quantity: [this.data.quantity],
      price: [this.data.price],
      unit_of_measure_id: [this.data.unit_of_measure_id],
      currency_id: [this.data.currency_id],
      supplier_id: [this.data.supplier_id],
    });
  }

  ngOnInit(): void {
    this.unitOfMeasureService.get().subscribe();
    this.currencyService.get().subscribe();
    this.supplierService.get().subscribe();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}

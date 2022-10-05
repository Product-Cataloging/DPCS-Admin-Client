import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/operation/models/currency.model';
import { ProductItem } from 'src/app/operation/models/product-item.model';
import { CurrencyQuery } from 'src/app/operation/state/currency.query';
import { CurrencyService } from 'src/app/operation/state/currency.service';

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.scss']
})
export class ProductItemFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();
  currencies$: Observable<Currency[]> = this.currencyQuery.selectAll();

  constructor(
    private currencyQuery: CurrencyQuery,
    private currencyService: CurrencyService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) {
    this.form = this.fb.group({
      color: [this.data.color],
      size: [this.data.size],
      product_image: [this.data.product_image],
      price: [this.data.price],
      unit_of_measure_id: [this.data.unit_of_measure_id],
      currency_id: [this.data.currency_id],
    });
  }

  ngOnInit(): void {
    this.currencyService.get();
  }

  onSubmit() {
    this.submitForm.emit();
  }

  onClose() {
    this.dialogRef.close();
  }
}

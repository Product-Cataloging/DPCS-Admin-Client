import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/operation/models/currency.model';
import { ProductItem } from 'src/app/operation/models/product-item.model';
import { UnitOfMeasureQuery } from 'src/app/operation/state/unit-of-measure.query';
import { UnitOfMeasureService } from 'src/app/operation/state/unit-of-measure.service';

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.scss']
})
export class ProductItemFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();
  units_of_measure$: Observable<Currency[]> = this.unitOfMeasureQuery.selectAll();

  constructor(
    private unitOfMeasureQuery: UnitOfMeasureQuery,
    private unitOfMeasureService: UnitOfMeasureService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) {
    this.form = this.fb.group({
      color: [this.data.color],
      material: [this.data.material],
      dimensions: [this.data.dimensions],
      unit_id: [this.data.unit_id],
    });
  }

  ngOnInit(): void {
    this.unitOfMeasureService.get();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}

import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
  units_of_measure$: Observable<UnitOfMeasure[]> = this.unitOfMeasureQuery.selectAll();

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
    this.unitOfMeasureService.get().subscribe();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}

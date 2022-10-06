import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Category } from 'src/app/operation/models/category.model';
import { Product } from 'src/app/operation/models/product.model';
import { Supplier } from 'src/app/operation/models/supplier.model';
import { CategoryQuery } from 'src/app/operation/state/category.query';
import { CategoryService } from 'src/app/operation/state/category.service';
import { SupplierQuery } from 'src/app/operation/state/supplier.query';
import { SupplierService } from 'src/app/operation/state/supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();

  suppliers$: Observable<Supplier[]> = this.supplierQuery.selectAll();
  categories$: Observable<Category[]> = this.categoryQuery.selectAll();

  constructor(
    private categoryQuery: CategoryQuery,
    private categoryService: CategoryService,
    private supplierQuery: SupplierQuery,
    private supplierService: SupplierService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.form = this.fb.group({
      name: [this.data.name],
      description: [this.data.description],
      category_id: ["" + this.data.category_id],
      supplier_id: ["" + this.data.supplier_id]
    });
  }

  ngOnInit(): void {
    this.supplierService.get();
    this.categoryService.get();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}

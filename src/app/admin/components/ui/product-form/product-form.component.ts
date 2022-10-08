import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';
import { Supplier } from '../../../models/supplier.model';
import { CategoryQuery } from '../../../state/category.query';
import { CategoryService } from '../../../state/category.service';
import { SupplierQuery } from '../../../state/supplier.query';
import { SupplierService } from '../../../state/supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();

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
    console.log(this.data)
    this.form = this.fb.group({
      name: [this.data.name],
      description: [this.data.description],
      image_url: [this.data.image_url],
      category_id: [this.data.category_id],
      brand: [this.data.brand]
    });
  }

  ngOnInit(): void {
    this.categoryService.get().subscribe();
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}

import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';
import { CategoryQuery } from '../../../state/category.query';
import { CategoryService } from '../../../state/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();
  categories$: Observable<Category[]> = this.categoryQuery.selectAll();

  constructor(
    private categoryQuery: CategoryQuery,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) {
    this.form = this.fb.group({
      name: [this.data.name],
      description: [this.data.description],
      parent_id: [this.data.parent_id]
    });
  }

  ngOnInit(): void {
    this.categoryService.get()
  }

  onSubmit() {
    console.log(this.form.value)
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }

}

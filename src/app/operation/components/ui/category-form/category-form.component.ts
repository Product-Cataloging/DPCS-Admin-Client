import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/operation/models/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();

  constructor(
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
  }

  onSubmit() {
    this.submitForm.emit();
  }

  onClose() {
    this.dialogRef.close();
  }

}

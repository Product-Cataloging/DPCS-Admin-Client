import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Supplier } from 'src/app/operation/models/supplier.model';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SupplierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Supplier
  ) {
    this.form = this.fb.group({
      company_name: [this.data.company_name]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}

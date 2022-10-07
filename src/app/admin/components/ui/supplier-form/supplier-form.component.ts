import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Supplier } from '../../../models/supplier.model';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SupplierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Supplier
  ) {
    this.form = this.fb.group({
      name: [this.data.name],
      description: [this.data.description],
      address_line_1: [this.data.address_line_1],
      address_line_2: [this.data.address_line_2],
      primary_phone_number: [this.data.primary_phone_number],
      secondary_phone_number: [this.data.secondary_phone_number],
      postal_code: [this.data.postal_code],
      email: [this.data.email],
      fax: [this.data.fax],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }

}

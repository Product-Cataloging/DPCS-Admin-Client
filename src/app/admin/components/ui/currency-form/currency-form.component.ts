import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Currency } from '../../../models/currency.model';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss']
})
export class CurrencyFormComponent implements OnInit {

  form: FormGroup
  @Output() submitForm = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CurrencyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Currency) {
    this.form = this.fb.group({
      name: [this.data.name],
      alias: [this.data.aliass]//data coming from the database has 'aliass' field not 'alias'
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

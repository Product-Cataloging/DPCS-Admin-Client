import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnitOfMeasure } from 'src/app/operation/models/unit-of-measure.model';

@Component({
  selector: 'app-unit-of-measure-form',
  templateUrl: './unit-of-measure-form.component.html',
  styleUrls: ['./unit-of-measure-form.component.scss']
})
export class UnitOfMeasureFormComponent implements OnInit {

  form: FormGroup
  @Output() submitForm = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UnitOfMeasureFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnitOfMeasure) {
    this.form = this.fb.group({
      name: [this.data.name],
      abbreviation: [this.data.abbreviation]
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

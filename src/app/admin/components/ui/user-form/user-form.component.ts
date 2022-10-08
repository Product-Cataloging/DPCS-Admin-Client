import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  mismatch: boolean = false;
  @Output() submitForm = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.form = this.fb.group({
      email: [this.data.email],
      username: [this.data.username],
      password: [this.data.password],
      confirm_password: [this.data.password],
      user_type: [this.data.user_type],
      is_active: [this.data.is_active]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.value.password === this.form.value.confirm_password) {
      this.mismatch = false;
      delete this.form.value.confirm_password;
      this.submitForm.emit(this.form.value);
    } else {
      this.mismatch = true;
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}

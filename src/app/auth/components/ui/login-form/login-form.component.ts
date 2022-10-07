import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitForm = new EventEmitter();
  @Input() errors: string[] = [];

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errors = [];
    this.submitForm.emit(this.form.value);
  }
}

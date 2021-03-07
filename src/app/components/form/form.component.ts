import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  value = 'Text entered, the input field is completed';
  value1;
  value2;
  value3;
  value4;
  value5;
  disabled = false;
  required = false;
  test = new FormControl('', [Validators.required]);
  valueOne = new FormControl('', [Validators.required]);
  valueTwo = new FormControl('', [Validators.required]);
  valueThree = new FormControl('', [Validators.required]);
  valueFour = new FormControl('', [Validators.required]);
  valueFive = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {

  }

  getErrorMessage() {
    return this.valueThree.hasError('required');
  }

  onDisabled() {
    this.disabled = !this.disabled;
    this.required = !this.required;
  }

}

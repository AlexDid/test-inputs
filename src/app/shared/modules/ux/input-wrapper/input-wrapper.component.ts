import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { ErrorsDictionary } from '../../../models';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {

  @Input()
  formControlNameString: string;

  @Input()
  errorsDictionary: ErrorsDictionary = {};

  private control: AbstractControl;

  constructor(
    @Optional() private parentForm: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.getControl();
  }

  get error(): string {
    if (!this.control?.errors || this.control?.valid || this.control?.pristine) {
      return null;
    }
    const errors = Object.keys(this.control.errors)
      .filter(key => !!this.errorsDictionary[key])
      .map(key => this.errorsDictionary[key]);
    return errors[0];
  }

  private getControl(): void {
    if (!this.parentForm) {
      throw new Error('<app-input-wrapper> should be used inside FormGroup');
    }
    if (!this.formControlNameString) {
      throw new Error('<app-input-wrapper> should have [formControlName]');
    }
    this.control = this.parentForm.form.get(this.formControlNameString);
  }

}

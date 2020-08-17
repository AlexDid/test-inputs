import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { customRuleMatchMap, pagesMap } from '../../data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomRuleMatch, Page, Rules } from '../../models';
import { ErrorsDictionary, SubscriptionComponent, ValidationError } from '../../../shared/models';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent extends SubscriptionComponent implements OnInit, OnDestroy {

  @Input()
  formValue: Rules;

  @Output()
  formChanges = new EventEmitter<Rules>();

  form: FormGroup;

  showCustomRuleInputs: boolean;

  readonly pagesMap = pagesMap;
  readonly customRuleMatchMap = customRuleMatchMap;

  readonly urlFieldErrors: ErrorsDictionary = {
    [ValidationError.REQUIRED]: 'URL is Missing'
  };

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.setFormValue();
    this.subscribeOnFormChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  private initForm(): void {
    this.form = this.fb.group({
      page: [Page.ALL_PAGES, Validators.required],
      customRuleMatch: [CustomRuleMatch.CONTAINS, Validators.required],
      customRuleUrl: [null, Validators.required],
    } as { [key in keyof Rules]: any });
  }

  private setFormValue(): void {
    if (this.formValue) {
      this.form.patchValue(this.formValue);
    }
  }

  private subscribeOnFormChanges(): void {
    this.form.valueChanges.pipe(
      this.getTakeUntilPipe()
    ).subscribe((value: Rules) => {
      this.toggleCustomFields(value);
      this.formChanges.emit(value);
    });
  }

  private toggleCustomFields(rules: Rules): void {
    this.showCustomRuleInputs = rules?.page === Page.CUSTOM;
    const customFields = [
      this.form.get('customRuleMatch' as keyof Rules),
      this.form.get('customRuleUrl' as keyof Rules),
    ];

    if (this.showCustomRuleInputs) {
      customFields.forEach(control => control.enable());
    } else {
      customFields.forEach(control => control.disable());
    }
  }
}

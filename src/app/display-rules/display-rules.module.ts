import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRulesComponent } from './display-rules.component';
import { ButtonModule, CloseIconModule, InputWrapperModule } from '../shared/modules/ux';
import { ReactiveFormsModule } from '@angular/forms';
import { RulesFormListComponent } from './rules-form-list/rules-form-list.component';
import { RuleFormComponent } from './rules-form-list/rule-form/rule-form.component';
import { CardModule } from '../shared/modules/ux/card/card.module';



@NgModule({
  declarations: [DisplayRulesComponent, RulesFormListComponent, RuleFormComponent],
  exports: [
    DisplayRulesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CloseIconModule,
    InputWrapperModule,
    CardModule
  ]
})
export class DisplayRulesModule { }

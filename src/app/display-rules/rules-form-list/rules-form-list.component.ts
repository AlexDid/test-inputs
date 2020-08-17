import { Component, OnInit } from '@angular/core';
import { Page, Rules } from '../models';

@Component({
  selector: 'app-rules-form-list',
  templateUrl: './rules-form-list.component.html',
  styleUrls: ['./rules-form-list.component.scss']
})
export class RulesFormListComponent implements OnInit {

  rules: Rules[] = [];

  ngOnInit(): void {
    this.addRule();
  }

  addRule(): void {
    this.rules.push({
      page: Page.ALL_PAGES,
    });
  }

  updateRule(index: number, rule: Rules): void {
    this.rules[index].page = rule.page;
    this.rules[index].customRuleUrl = rule.customRuleUrl;
    this.rules[index].customRuleMatch = rule.customRuleMatch;
  }

  removeRule(index: number): void {
    this.rules.splice(index, 1);
  }

}

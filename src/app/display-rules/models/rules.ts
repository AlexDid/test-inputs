import { Page } from './page.enum';
import { CustomRuleMatch } from './custom-rule-match.enum';

export interface Rules {
  page: Page;
  customRuleMatch?: CustomRuleMatch;
  customRuleUrl?: string;
}

import { CustomRuleMatch } from '../models';

export const customRuleMatchMap = new Map<CustomRuleMatch, string>([
  [CustomRuleMatch.CONTAINS, 'Contains'],
  [CustomRuleMatch.EXACT_MATCH, 'Exact Match']
]);

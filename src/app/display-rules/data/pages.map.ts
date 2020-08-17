import { Page } from '../models';

export const pagesMap = new Map<Page, string>([
  [Page.ALL_PAGES, 'All Pages'],
  [Page.PASSWORD, 'Password Pages'],
  [Page.HOME, 'Home Pages'],
  [Page.PRODUCT, 'Product Pages'],
  [Page.CUSTOM, 'Custom'],
]);

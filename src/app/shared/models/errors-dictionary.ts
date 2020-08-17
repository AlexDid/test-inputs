import { ValidationError } from './validation-error.enum';

export type ErrorsDictionary = {
  [key in ValidationError]?: string;
};

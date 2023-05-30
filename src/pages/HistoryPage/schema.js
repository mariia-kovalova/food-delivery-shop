import { codeMessage } from 'shared/validation/messages';
import { codeRegExp } from 'shared/validation/regexp';
import * as Yup from 'yup';

export const schema = Yup.object({
  term: Yup.string().matches(codeRegExp, codeMessage),
});

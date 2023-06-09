import {
  emailMes,
  nameMes,
  phoneMes,
  requiredMes,
} from 'shared/validation/messages';
import { nameRegExp, phoneRegExp } from 'shared/validation/regexp';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMes)
    .matches(nameRegExp, nameMes.format)
    .max(16, nameMes.size),
  email: Yup.string().required(requiredMes).email(emailMes),
  number: Yup.string().required(requiredMes).matches(phoneRegExp, phoneMes),
});

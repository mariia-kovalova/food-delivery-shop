import {
  emailMessage,
  nameMessages,
  phoneMessage,
  requiredMessage,
} from 'shared/validation/messages';
import { nameRegExp, phoneRegExp } from 'shared/validation/regexp';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMessage)
    .matches(nameRegExp, nameMessages.format)
    .max(16, nameMessages.size),
  email: Yup.string().required(requiredMessage).email(emailMessage),
  number: Yup.string()
    .required(requiredMessage)
    .matches(phoneRegExp, phoneMessage),
  address: Yup.string().required(requiredMessage),
});

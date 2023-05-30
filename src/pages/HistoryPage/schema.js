import * as Yup from 'yup';

export const schema = Yup.object({
  term: Yup.string('Invalid type'),
});

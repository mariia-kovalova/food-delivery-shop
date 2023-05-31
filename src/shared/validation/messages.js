const VALIDATION_MESSAGES = {
  requiredMes: 'This field is required',
  nameMes: {
    format: 'Invalid name format e.g Adrian, Jacob Mercer',
    size: 'Name may contain only 16 characters',
  },
  phoneMes: 'Invalid phone format',
  emailMes: 'Invalid email format',
  codeMes: 'Must contain digist only',
};

export const { requiredMes, nameMes, phoneMes, emailMes, codeMes } =
  VALIDATION_MESSAGES;

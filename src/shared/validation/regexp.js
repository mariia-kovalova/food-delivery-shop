const REG_EXPS = {
  nameRegExp: new RegExp(
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  ),
  phoneRegExp:
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  codeRegExp: new RegExp('^[0-9]*$'),
};

export const { nameRegExp, phoneRegExp, codeRegExp } = REG_EXPS;

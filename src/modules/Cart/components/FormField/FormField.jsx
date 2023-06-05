import { ErrorMessage } from '@hookform/error-message';
import { Label, Input, Error, Wrap } from './FormField.styled';

export const FormFiled = ({
  id,
  inputName,
  label,
  register,
  errors,
  ...rest
}) => {
  return (
    <Wrap>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} {...register(inputName)} />
      <Error>
        <ErrorMessage errors={errors} name={inputName} />
      </Error>
    </Wrap>
  );
};

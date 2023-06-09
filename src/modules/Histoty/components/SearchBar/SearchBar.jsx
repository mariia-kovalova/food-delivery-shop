import { useForm } from 'react-hook-form';
import { searchInput } from './inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { DELAY } from 'shared/constants/serachInputsParams';
import { Wrap } from './SearchBar.styled';
import { SearchInput } from 'shared/components/SearchInput';

export const SearchBar = ({ setCode }) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { [searchInput.inputName]: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSearch = debounce(async ({ target }) => {
    const code = target.value.trim();
    setCode(code);
  }, DELAY);

  return (
    <Wrap>
      <SearchInput
        id={searchInput.id}
        inputName={searchInput.inputName}
        register={register}
        errors={errors}
        onChange={handleSearch}
        placeholder="Search by order code..."
      />
    </Wrap>
  );
};

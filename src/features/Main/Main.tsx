import { Search } from '../Search/Search';
import { Result } from '../Result/Result';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Main() {
  const { searchValue, setSearchValue } = useLocalStorage();

  const handleOnValueChange = (newSearchValue: string) => {
    setSearchValue(newSearchValue);
  };

  return (
    <>
      <Search onSearch={handleOnValueChange} searchValue={searchValue} />
      <Result searchValue={searchValue} />
    </>
  );
}

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Layout, SearchIcon, SearchInput, Input, CloseIcon } from './style';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
import useDebounce from '@/hooks/useDebouce';
import { useRouter } from 'next/router';

interface SearchProps {
  onAddKeyword: (string: string) => void;
  state: Boolean;
  setState: Dispatch<SetStateAction<Boolean>>;
}

export default function SearchBar({
  onAddKeyword,
  state,
  setState,
}: SearchProps) {
  const router = useRouter();

  // ① props로 전달받은 onAddKeyword의 데이터로 들어갈 state이다
  const [searchValue, setSearchValue] = useState<string>('');
  const onChangeSearch = useCallback((e: any) => {
    setSearchValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      onAddKeyword(searchValue);
      setSearchValue('');
      setState(true);
    },
    [searchValue, router, onAddKeyword]
  );

  //delete 아이콘 클릭 시 실행되는 함수
  const onClickCloseIcon = () => {
    setSearchValue('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Layout state={searchValue?.length > 0}>
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
          <SearchInput>
            <Input
              value={searchValue}
              onChange={onChangeSearch}
              placeholder="검색"
            />
          </SearchInput>
          {searchValue && (
            <CloseIcon>
              <AiFillCloseCircle onClick={onClickCloseIcon} />
            </CloseIcon>
          )}
        </Layout>
      </form>
    </>
  );
}

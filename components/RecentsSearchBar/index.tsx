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
  const { query } = router;
  const [searchValue, setSearchValue] = useState<string>(() => {
    // URL에서 검색어 갖고 옴

    return typeof query.q === 'string' ? query.q : ''; // string으로 형변환 후 반환
  });

  useEffect(() => {
    if (query.q !== undefined) {
      setSearchValue(query.q);
    }
  }, [router]);

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddKeyword(searchValue);
      setState(true);

      // URL에 검색어 추가
      router.push({
        pathname: '/search', // 검색 결과 페이지 URL
        query: { q: searchValue }, // 'q'라는 쿼리 매개변수에 검색어 추가
      });
    },
    [searchValue, router, onAddKeyword, setState]
  );

  // delete 아이콘 클릭 시 실행
  const onClickCloseIcon = () => {
    setSearchValue('');
    // URL에서 검색어 제거
    router.push({
      pathname: '/search', // 검색 결과 페이지 URL
    });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 URL에서 검색어를 가져와 state를 설정
    const { query } = router;
    setSearchValue(typeof query.q === 'string' ? query.q : '');
  }, []);

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

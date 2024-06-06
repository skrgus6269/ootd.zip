import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Layout,
  SearchIcon,
  SearchInput,
  Input,
  CloseIcon,
  Form,
} from './style';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface SearchProps {
  onAddKeyword: (string: string) => void;
  state: Boolean;
  setState: Dispatch<SetStateAction<Boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
}

export default function SearchBar({
  onAddKeyword,
  state,
  setState,
  setSearchValue,
  searchValue,
}: SearchProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<Boolean>(false);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 검색어가 빈 문자열이 아닌 경우에만 실행
    onAddKeyword(value);
    setSearchValue(value);

    // URL에 검색어 추가
    router.push({
      pathname: '/search', // 검색 결과 페이지 URL
      query: { q: value }, // 'q'라는 쿼리 매개변수에 검색어 추가
    });
    setInputFocus(false);
  };

  // delete 아이콘 클릭 시 실행
  const onClickCloseIcon = () => {
    setValue('');
    setInputFocus(true);
  };

  return (
    <Form
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
      onSubmit={onSubmit}
    >
      <Layout
        inputFocus={inputFocus}
        state={searchValue?.length > 0 || value.length > 0}
      >
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <SearchInput>
          <Input value={value} onChange={onChangeSearch} placeholder="검색" />
        </SearchInput>
        {value && (
          <CloseIcon
            className="close"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          >
            <AiFillCloseCircle onClick={onClickCloseIcon} />
          </CloseIcon>
        )}
      </Layout>
    </Form>
  );
}

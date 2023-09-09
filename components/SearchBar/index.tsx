import { useState } from 'react';
import { Layout, SearchIcon, SearchInput, Input, CloseIcon } from './style';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
import useDebounce from '@/hooks/useDebouce';

interface SearchProps {
  placeholder: string;
}

export default function SearchBar(props: SearchProps) {
  //input의 value
  const [letter, setLetter] = useState('');

  //input 입력 시 letter를 업데이트 하는 함수
  const onChangeInput = (value: string) => {
    setLetter(value);
  };

  //console.log 자리에 검색 api가 올 예정
  const search = () => {
    console.log(letter);
  };

  //delete 아이콘 클릭 시 실행되는 함수
  const onClickCloseIcon = () => {
    setLetter('');
  };

  //input 입력 시 실행되는 검색 api 함수에 디바운싱을 건 함수
  useDebounce({
    func: () => search(),
    delay: 500,
    deps: [letter],
  });

  return (
    <>
      <Layout>
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <SearchInput>
          <Input
            value={letter}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={props.placeholder}
          />
        </SearchInput>
        {letter && (
          <CloseIcon>
            <AiFillCloseCircle onClick={onClickCloseIcon} />
          </CloseIcon>
        )}
      </Layout>
      {letter}
    </>
  );
}

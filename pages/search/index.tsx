import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RecentsSearchBar from '@/components/RecentsSearchBar';
import S from '@/style/search/style';
import { Headline2 } from '@/components/UI';
import SearchResult from '@/components/Domain/Search/SearchResult';
import Recents from '@/components/Domain/Search/Recents';

export interface keywordsInterface {
  id: number;
  text: string;
}

export default function Search() {
  const [keywords, setKeywords] = useState<keywordsInterface[]>([]); // 로컬 스토리지에 저장한 검색어를 관리할 useState keywords
  const [state, setState] = useState<Boolean>(false); // 최근 검색어 component or 검색 결과 component 체크

  //브라우저가 모두 렌더링된 상태에서 해당 함수를 실행할 수 있도록 작업
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  // keywords가 변경될 경우 새롭게 localStroage의 아이템 'keywords' 저장
  useEffect(() => {
    // keywords가 15개를 초과하는 경우
    if (keywords.length > 15) {
      const updatedKeywords = keywords.slice(0, 15);
      setKeywords(updatedKeywords);
      localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
    } else {
      localStorage.setItem('keywords', JSON.stringify(keywords));
    }
  }, [keywords]);

  // 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  // 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  return (
    <S.Layout>
      <S.SearchField>
        <RecentsSearchBar
          onAddKeyword={handleAddKeyword}
          state={state}
          setState={setState}
        />
      </S.SearchField>
      {state ? (
        <SearchResult />
      ) : (
        <Recents
          handleClearKeywords={handleClearKeywords}
          keywords={keywords}
          handleRemoveKeyword={handleRemoveKeyword}
        />
      )}
    </S.Layout>
  );
}

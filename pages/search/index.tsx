import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RecentsSearchBar from '@/components/RecentsSearchBar';
import S from '@/pageStyle/search/style';
import SearchResult from '@/components/Domain/Search/SearchResult';
import Recents from '@/components/Domain/Search/Recents';
import { useRouter } from 'next/router';

export interface keywordsInterface {
  id: number;
  text: string;
}

export default function Search() {
  const [keywords, setKeywords] = useState<keywordsInterface[]>([]);
  const [state, setState] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    if (keywords.length > 15) {
      const updatedKeywords = keywords.slice(0, 15);
      setKeywords(updatedKeywords);
      localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
    } else {
      localStorage.setItem('keywords', JSON.stringify(keywords));
    }
  }, [keywords]);

  useEffect(() => {
    const { query } = router;
    const { q } = query;
    if (q) {
      setSearchValue(q.toString());
      setState(true);
    }
  }, [router.query]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    if (keywords.filter((item) => item.text === text).length > 0) return;
    if (text.trim() === '') return;
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  const handleSearch = (text: string) => {
    setSearchValue(text);
    router.push(`/search?q=${encodeURIComponent(text)}`);
  };

  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <S.Layout>
      <S.SearchField>
        <RecentsSearchBar
          onAddKeyword={handleAddKeyword}
          state={state}
          setState={setState}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </S.SearchField>
      {state ? (
        <SearchResult keywordsValue={searchValue} />
      ) : (
        <Recents
          setSearchValue={setSearchValue}
          handleClearKeywords={() => setKeywords([])}
          keywords={keywords}
          handleRemoveKeyword={handleRemoveKeyword}
          onSearch={handleSearch}
        />
      )}
    </S.Layout>
  );
}

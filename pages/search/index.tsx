import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RecentsSearchBar from '@/components/RecentsSearchBar';
import S from '@/pageStyle/search/style';
import SearchBar from '@/components/SearchBar';
import { Headline2 } from '@/components/UI';
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
  const [searchQuery, setSearchQuery] = useState<string>('');
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

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    setState(true);
    router.push(`/search?q=${encodeURIComponent(text)}`);
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
        <SearchResult keywordsValue={searchQuery} />
      ) : (
        <Recents
          handleClearKeywords={() => setKeywords([])}
          keywords={keywords}
          handleRemoveKeyword={handleRemoveKeyword}
          onSearch={handleSearch}
        />
      )}
    </S.Layout>
  );
}

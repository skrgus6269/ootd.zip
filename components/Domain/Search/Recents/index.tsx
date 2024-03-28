import { Title1, Caption1, Button3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { keywordsInterface } from '@/pages/search';
import { Dispatch, SetStateAction } from 'react';

interface recentsProps {
  keywords: keywordsInterface[]; // 최근 검색어 목록을 받아올 prop
  handleClearKeywords: () => void; // 최근 검색어를 모두 지우는 함수를 받아올 prop
  handleRemoveKeyword: (id: number) => void; // 특정 검색어를 지우는 함수를 받아올 prop
  onSearch: (text: string) => void; // 검색을 실행하는 함수를 받아올 prop
}

export default function Recents({
  handleClearKeywords,
  handleRemoveKeyword,
  keywords,
  onSearch,
}: recentsProps) {
  const router = useRouter();

  return (
    <>
      {keywords.length > 0 && (
        <S.Layout>
          <S.Menu>
            <Title1>최근 검색어</Title1>
            <S.CaptionText>
              <Caption1 onClick={handleClearKeywords}>모두 지우기</Caption1>
            </S.CaptionText>
          </S.Menu>

          <S.Keywords>
            {keywords.map(({ id, text }) => {
              return (
                <S.Chip key={id}>
                  <Button3
                    className="tagName"
                    state="emphasis"
                    onClick={() => onSearch(text)}
                  >
                    {text}
                  </Button3>
                  <AiOutlineClose
                    className="close"
                    onClick={() => {
                      handleRemoveKeyword(id);
                    }}
                  />
                </S.Chip>
              );
            })}
          </S.Keywords>
        </S.Layout>
      )}
    </>
  );
}

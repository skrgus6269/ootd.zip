import { Title1, Caption1, Button3 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { keywordsInterface } from '@/pages/search';

interface recentsProps {
  handleClearKeywords: () => void;
  handleRemoveKeyword: (id: number) => void;
  keywords: keywordsInterface[];
}
export default function Recents({
  handleClearKeywords,
  handleRemoveKeyword,
  keywords,
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
                  <Button3 className="tagName" state="emphasis">
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

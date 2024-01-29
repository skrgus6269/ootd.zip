import { AiFillCheckSquare } from 'react-icons/ai';
import { Body2, Body4 } from '../../UI';
import S from './style';

interface BrandProps {
  keyword?: string;
  korean: string;
  english: string;
  onClickBrandList: (index: number) => void;
  onClickIndex: number;
  state?: Boolean;
}

export interface BrandType {
  brandId: number;
  korean: string;
  english: string;
  state?: Boolean;
}

export default function Brand({
  keyword,
  korean,
  english,
  onClickBrandList,
  onClickIndex,
  state,
}: BrandProps) {
  const SearchBrand = () => {
    const [koreanLeft, koreanRight] = korean!.split(keyword!);

    return (
      <div className="containKeyword">
        <Body2>{koreanLeft}</Body2>
        {korean.includes(keyword!) && <Body2 state="emphasis">{keyword}</Body2>}
        <Body2>{koreanRight}</Body2>
      </div>
    );
  };

  const onClickBrand = () => {
    onClickBrandList(onClickIndex);
  };

  return (
    <S.Layout onClick={onClickBrand}>
      <div>
        <S.Korean>
          {keyword !== undefined ? SearchBrand() : <Body2>{korean}</Body2>}
        </S.Korean>
        <S.English>
          <Body4>{english}</Body4>
        </S.English>
      </div>
      {state && <AiFillCheckSquare className="selected" />}
    </S.Layout>
  );
}

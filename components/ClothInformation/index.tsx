import { ClothInformationProps } from './type';
import S from './style';
import { Body4, Headline4, Subtitle3 } from '../UI';
import ImageWithCaption from '../UI/ImageWithCaption';
import LikeToggle from '../Toggle/LikeToggle';
import { AiOutlineBell } from 'react-icons/ai';

export default function ClothInformation({
  clothImage,
  caption,
  headline,
  subHeadline,
  bodyFirst,
  bodySecond,
  size,
  icon,
}: ClothInformationProps) {
  return (
    <S.Layout size={size!}>
      <S.ListImage>
        <ImageWithCaption
          caption={caption}
          size="70px"
          src={clothImage}
          alt="옷정보"
        />
      </S.ListImage>
      <S.Information>
        <S.Headline>
          <Headline4>{headline}</Headline4>
          <S.Divider>|</S.Divider>
          <Subtitle3>{subHeadline}</Subtitle3>
        </S.Headline>
        <S.BodyFirst>
          <Body4>{bodyFirst}</Body4>
        </S.BodyFirst>
        <S.BodySecond>
          <Body4>{bodySecond}</Body4>
        </S.BodySecond>
      </S.Information>
      <S.Icon>
        {icon === 'like' && <LikeToggle />}
        {icon === 'bell' && <AiOutlineBell />}
      </S.Icon>
    </S.Layout>
  );
}

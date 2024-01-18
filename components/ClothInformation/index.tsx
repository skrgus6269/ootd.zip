import { ClothInformationProps } from './type';
import S from './style';
import { Body4, Title2 } from '../UI';
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
  onClick,
}: ClothInformationProps) {
  return (
    <S.Layout size={size!} onClick={onClick}>
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
          <Title2>{headline}</Title2>
          <S.Divider>|</S.Divider>
          <Title2>{subHeadline}</Title2>
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

import Image from 'next/image';
import S from './style';
import { Body4, Caption2 } from '@/components/UI';

export interface AlarmType {
  id: number;
  profileImage: string;
  timeType: string;
  timeStamp: string;
  message: string;
  userName: string;
  content?: string;
  contentImage?: string;
}

export default function Alarms({
  profileImage,
  contentImage,
  timeStamp,
  message,
  content,
  userName,
}: AlarmType) {
  return (
    <S.Layout>
      <S.Left>
        <Image width={32} height={32} src={profileImage} alt="프로필 이미지" />
      </S.Left>
      <S.Middle>
        <S.Message>
          <Body4 className="userName" state="emphasis">
            {userName}
          </Body4>
          <Body4>{message}</Body4>
        </S.Message>
        {content && <Body4 className="content">{content}</Body4>}
        <Caption2 className="timeStamp">{timeStamp}</Caption2>
      </S.Middle>
      <S.Right>
        {contentImage && (
          <Image
            width={32}
            height={32}
            src={contentImage}
            alt="콘텐츠 이미지"
          />
        )}
      </S.Right>
    </S.Layout>
  );
}

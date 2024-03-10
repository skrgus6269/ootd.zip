import Image from 'next/image';
import S from './style';
import { Body4, Caption2 } from '@/components/UI';
import Avatar from '@/public/images/Avatar.svg';

export interface AlarmType {
  id: number;
  profileImage: string | null;
  timeType: string;
  timeStamp: string;
  message: string;
  userName: string;
  content?: string;
  contentImage?: string;
  goUrl: string;
  userId: number;
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
        {profileImage && (
          <Image
            width={32}
            height={32}
            src={profileImage}
            alt="프로필 이미지"
          />
        )}
        {!profileImage && <Avatar />}
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

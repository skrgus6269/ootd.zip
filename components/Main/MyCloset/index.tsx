import { MyProfile } from '@/components/Profile';
import S from './style';
import { StaticImageData } from 'next/image';
import Carousel from '@/components/Carousel';
import { MainTopClothCard } from '@/components/Card';

interface UserClosetProps {
  isUser: Boolean;
  userOOTD: {
    user: {
      userImage: StaticImageData;
      userName: string;
      follow: number;
      myCloth: number;
    };
    data: {
      OOTDImage: StaticImageData;
      caption: string;
      headline: string;
      subHeadline: string;
    }[];
  };
}

export default function UserCloset({ isUser, userOOTD }: UserClosetProps) {
  return (
    <S.Layout>
      <MyProfile
        isUser={isUser}
        userImage={userOOTD.user.userImage}
        userName={userOOTD.user.userName}
        follow={userOOTD.user.follow}
        myCloth={userOOTD.user.myCloth}
      />
      <Carousel slidesToShow={2.3} infinite={isUser}>
        {userOOTD.data.map((item, index) => {
          return (
            <S.CarouselLayout key={index}>
              <MainTopClothCard
                data={{
                  src: item.OOTDImage,
                  alt: '내 옷장',
                  caption: item.caption,
                }}
                headline={item.headline}
                body={item.subHeadline}
              />
            </S.CarouselLayout>
          );
        })}
      </Carousel>
    </S.Layout>
  );
}

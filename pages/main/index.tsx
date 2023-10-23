import UserCloset from '@/components/Main/MyCloset';
import S from './style';
import appleLogo from '@/public/images/appleLogo.png';
import Jae from '@/public/images/권재형.jpg';
import Kim from '@/public/images/김주엽.jpg';
import Park from '@/public/images/박윤욱.jpg';
import Son from '@/public/images/손정민.jpg';
import OOTD1 from '@/public/images/권낙현.jpg';
import OOTD2 from '@/public/images/권낙현2.jpg';
import OOTD3 from '@/public/images/권낙현3.jpg';
import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import { AiOutlineSearch } from 'react-icons/ai';

const MyClosetDataSample = {
  user: {
    userImage: appleLogo,
    userName: 'username',
    follow: 999,
    myCloth: 999,
  },
  data: [
    {
      OOTDImage: OOTD1,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD2,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD3,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD1,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
  ],
};

const Main = () => {
  return (
    <S.Layout>
      <AppBar
        leftProps={<></>}
        middleProps={<Headline>logo</Headline>}
        rightProps={<AiOutlineSearch />}
      />
      <UserCloset isUser={true} userOOTD={MyClosetDataSample} />
    </S.Layout>
  );
};

export default Main;

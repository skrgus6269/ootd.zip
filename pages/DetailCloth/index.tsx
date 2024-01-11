import S from './style';
import { Headline3 } from '@/components/UI';
import AppBar from '@/components/Appbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import DetailClothHeader from '@/components/DetailCloth/DetailClothHeader';
import DetailClothDiscription from '@/components/DetailCloth/DetailClothDiscription';
import DetailClothDetailInfo from '@/components/DetailCloth/DetailClothDetailInfo';

const DetailCloth = () => {
  return (
    <>
      <AppBar
        leftProps={<AiOutlineArrowLeft />}
        middleProps={<Headline3>의류 상세</Headline3>}
        rightProps={<></>}
      />
      <DetailClothHeader
        isPublic={true}
        bigCategory="외투"
        smallCategory="바람막이"
        brand="NIKE"
        clothByName="이름"
      />
      <img
        src={
          'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg'
        }
        alt=""
        width="100%"
        height="390px"
      />
      <DetailClothDiscription
        isLink={false}
        purchasing="신세계 백화점"
        uploadDate="23.12.22"
        memo="안감 없고 얇아서 늦여름~초가을까지는 무난 낙엽 떨어지면 단독으로 입기 어려움"
      />
      <DetailClothDetailInfo
        color={['레드', '베이지', '민트']}
        size="FREE"
        buyDate="22 F/W"
      />
    </>
  );
};

export default DetailCloth;

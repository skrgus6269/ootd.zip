import { BottomComponent, BottomComponentItem } from './style';

import {
  AiOutlineUser,
  AiOutlineTag,
  AiFillPlusSquare,
  AiOutlineCrown,
  AiOutlineHome,
} from 'react-icons/ai';

import { useRouter } from 'next/router';

export default function BottomNavBar() {
  const router = useRouter();

  const bottomNavBarLinkers = [
    { icon: <AiOutlineHome />, click: () => router.push('/') },
    { icon: <AiOutlineCrown />, click: () => router.push('/') },
    { icon: <AiFillPlusSquare />, click: () => router.push('/') },
    { icon: <AiOutlineTag />, click: () => router.push('/') },
    { icon: <AiOutlineUser />, click: () => router.push('/') },
  ];

  return (
    <BottomComponent>
      {bottomNavBarLinkers.map((item, index) => {
        return (
          <BottomComponentItem key={index} onClick={item.click}>
            {item.icon}
          </BottomComponentItem>
        );
      })}
    </BottomComponent>
  );
}

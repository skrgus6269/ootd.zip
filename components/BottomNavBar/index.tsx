/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { BottomComponent, BottomComponentItem } from './style';

import {
  AiOutlineUser,
  AiOutlinePlusSquare,
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookmarkOutlined from '@/public/images/BookmarkOutlined.svg';
import BookmarkFilled from '@/public/images/BookmarkFilled.svg';
import UserFilled from '@/public/images/UserFilled.svg';
import SearchFilled from '@/public/images/SearchFilled.svg';
import { useRecoilState } from 'recoil';
import { BottomNavbarPlusButtonState } from '@/utils/recoil/atom';
import FilledSquare from '@/public/images/FilledPlusSquare.svg';

const icons = [
  <AiOutlineHome />,
  <AiOutlineSearch />,
  <AiOutlinePlusSquare />,
  <BookmarkOutlined />,
  <AiOutlineUser />,
];

const activeIcons = [
  <AiFillHome />,
  <SearchFilled />,
  <FilledSquare />,
  <BookmarkFilled />,
  <UserFilled />,
];

const routes = ['/main', '/search', '/plus', '/Bookmark', '/mypage'];

function getActiveIndex(path: string) {
  for (let i = 0; i < routes.length; i++) {
    if (path.includes(routes[i])) {
      return i;
    }
  }
}

export default function BottomNavBar() {
  const router = useRouter();
  const path = router.asPath;
  const activeIndex = getActiveIndex(path);

  const [bottomNavBarLinkers, setBottomNavBarLinkers] = useState(
    icons.map((icon, index) => ({
      icon: index === activeIndex ? activeIcons[index] : icon,
      click: () => router.push(routes[index]),
    }))
  );

  useEffect(() => {
    const newLinkers = icons.map((icon, index) => ({
      icon: index === activeIndex ? activeIcons[index] : icon,
      click: () => router.push(routes[index]),
    }));
    setBottomNavBarLinkers(newLinkers);
  }, [router, activeIndex]);

  const [addModalState, setAddModalState] = useRecoilState(
    BottomNavbarPlusButtonState
  );

  const onClickPlusButton = () => {
    setAddModalState(true);
  };

  return (
    <BottomComponent>
      {bottomNavBarLinkers.map((item, index) => {
        return index === 2 ? (
          <BottomComponentItem key={index} onClick={onClickPlusButton}>
            {addModalState ? <FilledSquare /> : item.icon}
          </BottomComponentItem>
        ) : (
          <BottomComponentItem key={index} onClick={item.click}>
            {item.icon}
          </BottomComponentItem>
        );
      })}
    </BottomComponent>
  );
}

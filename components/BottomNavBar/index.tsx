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
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BookmarkOutlined from '@/public/images/BookmarkOutlined.svg';
import BookmarkFilled from '@/public/images/BookmarkFilled.svg';
import UserFilled from '@/public/images/UserFilled.svg';
import SearchFilled from '@/public/images/SearchFilled.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
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

interface BottomNavBarProps {
  addModalState: Boolean;
  setAddModalState: Dispatch<SetStateAction<Boolean>>;
}

export default function BottomNavBar({
  addModalState,
  setAddModalState,
}: BottomNavBarProps) {
  const router = useRouter();
  const path = router.asPath;
  const myId = useRecoilValue(userId);

  const routes = ['/main', '/search', '/plus', '/bookmark', `/mypage/${myId}`];

  const getActiveIndex = () =>
    routes.findIndex((route) => path.includes(route));

  const activeIndex = getActiveIndex();

  const [bottomNavBarLinkers, setBottomNavBarLinkers] = useState(
    icons.map((icon, index) => ({
      icon: index === activeIndex ? activeIcons[index] : icon,
      click: () => {
        router.push(routes[index]);
        setAddModalState(false);
      },
    }))
  );

  useEffect(() => {
    const newLinkers = icons.map((icon, index) => ({
      icon: index === activeIndex ? activeIcons[index] : icon,
      click: () => {
        router.push(routes[index]);
        setAddModalState(false);
      },
    }));
    setBottomNavBarLinkers(newLinkers);
  }, [router, activeIndex]);

  const onClickPlusButton = () => {
    setAddModalState(!addModalState);
  };
  return (
    <BottomComponent>
      {bottomNavBarLinkers.map((item, index) => (
        <BottomComponentItem
          key={index}
          onClick={index === 2 ? onClickPlusButton : item.click}
        >
          {index === 2 && addModalState ? (
            <FilledSquare />
          ) : path.includes('mypage') && index === 4 ? (
            router.isReady && myId === Number(router.query.UserId![0]) ? (
              activeIcons[index]
            ) : (
              item.icon
            )
          ) : (
            item.icon
          )}
        </BottomComponentItem>
      ))}
    </BottomComponent>
  );
}

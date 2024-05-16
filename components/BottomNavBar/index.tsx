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
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import FilledSquare from '@/public/images/FilledPlusSquare.svg';
import Link from 'next/link';
import Image from 'next/image';

const icons = [
  <AiOutlineHome />,
  <AiOutlineSearch />,
  <AiOutlinePlusSquare />,
  <Image
    src="/images/BookmarkOutlined.svg"
    alt="BookmarkOutlined"
    width={16}
    height={16}
  />,
  <AiOutlineUser />,
];

const activeIcons = [
  <AiFillHome />,
  <Image
    src="/images/SearchFilled.svg"
    alt="SearchFilled"
    width={16}
    height={16}
  />,
  <FilledSquare />,
  <Image
    src="/images/BookmarkFilled.svg"
    alt="BookmarkFilled"
    width={16}
    height={16}
  />,
  <Image
    src="/images/UserFilled.svg"
    alt="UserFilled"
    width={16}
    height={16}
  />,
];

interface BottomNavBarProps {
  addModalState: Boolean;
  setAddModalState: Dispatch<SetStateAction<Boolean>>;
}

interface BottomNavBarType {
  icon: JSX.Element;
  click: () => void;
}

export default function BottomNavBar({
  addModalState,
  setAddModalState,
}: BottomNavBarProps) {
  const router = useRouter();
  const path = router.asPath;
  const myId = useRecoilValue(userId);

  const routes = [
    '/main/curation',
    '/search',
    '/plus',
    '/bookmark',
    `/mypage/${myId}`,
  ];

  const getActiveIndex = () =>
    routes.findIndex((route) => path.includes(route));

  const activeIndex = getActiveIndex();

  const [bottomNavBarLinkers, setBottomNavBarLinkers] =
    useState<BottomNavBarType[]>();

  useEffect(() => {
    setBottomNavBarLinkers(
      icons.map((icon, index) => ({
        icon: index === activeIndex ? activeIcons[index] : icon,
        click: () => {
          router.push(routes[index]);
          setAddModalState(false);
        },
      }))
    );
  }, []);
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
      {bottomNavBarLinkers &&
        bottomNavBarLinkers.map((item, index) =>
          index === 2 ? (
            <BottomComponentItem key={index} onClick={onClickPlusButton}>
              {addModalState ? <FilledSquare /> : <AiOutlinePlusSquare />}
            </BottomComponentItem>
          ) : (
            <Link key={index} href={routes[index]}>
              <BottomComponentItem onClick={item.click}>
                {path.substring(1, 7) === 'mypage' && index === 4
                  ? router.isReady && myId === Number(router.query.UserId![0])
                    ? activeIcons[index]
                    : item.icon
                  : item.icon}
              </BottomComponentItem>
            </Link>
          )
        )}
    </BottomComponent>
  );
}

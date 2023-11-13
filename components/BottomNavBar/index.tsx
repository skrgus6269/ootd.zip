/* eslint-disable react/jsx-key */
import { BottomComponent, BottomComponentItem } from './style';

import {
  AiOutlineUser,
  AiOutlineTag,
  AiFillTag,
  AiFillPlusSquare,
  AiOutlinePlusSquare,
  AiOutlineCrown,
  AiFillCrown,
  AiOutlineHome,
  AiFillHome,
} from 'react-icons/ai';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const icons = [
  <AiOutlineHome />,
  <AiOutlineCrown />,
  <AiOutlinePlusSquare />,
  <AiOutlineTag />,
  <AiOutlineUser />,
];

const activeIcons = [
  <AiFillHome />,
  <AiFillCrown />,
  <AiFillPlusSquare />,
  <AiFillTag />,
  <AiFillHome />,
];

const routes = ['/main', '/ranking', '/plus', '/tag', '/mypage'];

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

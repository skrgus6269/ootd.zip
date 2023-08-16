import React, { ReactNode } from 'react';

import {
  MainComponent,
  BottomComponent,
  Layout,
  BottomComponentItem,
} from './style';

import {
  AiOutlineUser,
  AiOutlineTag,
  AiFillPlusSquare,
  AiOutlineCrown,
  AiOutlineHome,
} from 'react-icons/ai';

import { useRouter } from 'next/router';

interface BottomNavBarProps {
  children: ReactNode;
}

export default function BottomNavBar({ children }: BottomNavBarProps) {
  const router = useRouter();

  const BottomNavBarInformation = [
    { icon: <AiOutlineHome />, click: () => router.push('/') },
    { icon: <AiOutlineCrown />, click: () => router.push('/') },
    { icon: <AiFillPlusSquare />, click: () => router.push('/') },
    { icon: <AiOutlineTag />, click: () => router.push('/') },
    { icon: <AiOutlineUser />, click: () => router.push('/') },
  ];

  return (
    <Layout>
      <MainComponent>{children}</MainComponent>
      <BottomComponent>
        {BottomNavBarInformation.map((item, index) => {
          return (
            <BottomComponentItem key={index} onClick={item.click}>
              {item.icon}
            </BottomComponentItem>
          );
        })}
      </BottomComponent>
    </Layout>
  );
}

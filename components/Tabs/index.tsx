import TabBar from './TabBar';
import Tab from './Tab';
import SwipeDetector from '@/hooks/Swipe';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface TabsProps {
  children: React.ReactNode;
  tab: string[];
}
export default function Tabs({ children, tab }: TabsProps) {
  const [state, setState] = useState<number>(0);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    if (name) {
      const index = tab.indexOf(name![0]);

      if (state === 1 && index !== 2) {
        router.push(`./${tab[index + 1]}`);
      }

      if (state === 2 && index !== 0) {
        router.push(`./${tab[index - 1]}`);
      }

      setState(0);
    }
  }, [state]);

  return (
    <>
      <SwipeDetector setState={setState}>{children}</SwipeDetector>
    </>
  );
}

Tabs.TabBar = TabBar;
Tabs.Tab = Tab;

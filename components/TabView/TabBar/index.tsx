import { Body2 } from '@/components/UI';
import { Layout, Tab, Hr } from './style';
import { useTabViewContext } from '@/hooks/use-tabview/context';
import { useEffect, useState } from 'react';
interface TabBarProps {
  tab: string[];
}

export default function TabBar({ tab }: TabBarProps) {
  const { index, setIndex } = useTabViewContext();

  //props로 전달받은 tab의 개수만큼 유동적으로 초깃값 관리
  const firstState = new Array(tab.length - 1).fill(false);

  const [state, setState] = useState([true, ...firstState]);

  const handleTabClick = (currentIndex: number) => {
    setIndex(currentIndex);
  };

  useEffect(() => {
    const newArray = new Array(tab.length).fill(false);
    newArray[index - 1] = true;
    setState(newArray);
  }, [index, tab.length]);

  return (
    <>
      <Layout>
        {tab.map((item, index) => {
          return (
            <Tab
              key={index}
              focus={state[index]}
              onClick={() => handleTabClick(index + 1)}
            >
              <Body2>{item}</Body2>
            </Tab>
          );
        })}
      </Layout>
      <Hr />
    </>
  );
}

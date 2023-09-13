import { useRouter } from 'next/router';
import { Layout, Tab } from './style';
import { useEffect, useState } from 'react';

interface TabBarProps {
  tab: string[];
}

export default function TabBar(props: TabBarProps) {
  const router = useRouter();
  const { name } = router.query;

  const [state, setState] = useState<Boolean[]>([true, false, false]);

  useEffect(() => {
    if (name) {
      setState([
        props.tab[0] === name![0],
        props.tab[1] === name![0],
        props.tab[2] === name![0],
      ]);
    }
  }, [name, props.tab]);

  const onClickTabBar = (name: string) => {
    router.push(`./${name}`);
  };

  return (
    <Layout>
      <Tab focus={state[0]} onClick={() => onClickTabBar(props.tab[0])}>
        OOTD
      </Tab>
      <Tab focus={state[1]} onClick={() => onClickTabBar(props.tab[1])}>
        옷장
      </Tab>
      <Tab focus={state[2]} onClick={() => onClickTabBar(props.tab[2])}>
        북마크
      </Tab>
    </Layout>
  );
}

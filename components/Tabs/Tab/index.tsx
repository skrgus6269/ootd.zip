import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
  name: string;
}

export default function Tab(props: TabsProps) {
  const router = useRouter();
  const { name } = router.query;
  const [state, setState] = useState<Boolean>(false);

  useEffect(() => {
    if (name) {
      setState(props.name === name![0]);
    }
  }, [name, props.name]);

  return <>{state && props.children}</>;
}

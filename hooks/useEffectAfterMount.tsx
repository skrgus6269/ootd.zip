import { useRef, EffectCallback, DependencyList, useEffect } from 'react';

export default function useEffectAfterMount(
  effect: EffectCallback,
  dependencies?: DependencyList
) {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effect();
    }
  }, dependencies);
}

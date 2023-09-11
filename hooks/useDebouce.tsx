import { useCallback, useEffect } from 'react';

interface debounceProps {
  func: () => void;
  delay: number;
  deps: any[];
}
const useDebounce = (props: debounceProps) => {
  const callback = useCallback(props.func, props.deps);

  useEffect(() => {
    const timer = setTimeout(() => callback(), props.delay);
    return () => clearTimeout(timer);
  }, [callback, props.deps]);
};

export default useDebounce;

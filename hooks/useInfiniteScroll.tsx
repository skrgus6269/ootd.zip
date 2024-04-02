import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  fetchDataFunction: any;
  initialData: any;
  size: number;
}

export default function useInfiniteScroll({
  fetchDataFunction,
  initialData = [],
  size,
}: InfiniteScrollProps) {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState(initialData);
  const [hasNextPage, setHasNextPage] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [total, setTotal] = useState<number>(0); // total 필드 추가
  const containerRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    fetchDataFunction(0, size).then((result: any) => {
      if (!result) return;
      setData(result.content);
      setHasNextPage(!result.isLast);
      setPage(1);
      setIsLoading(false);
      if (result.total) setTotal(result.total);
    });
  }, [router.isReady]);

  useEffect(() => {
    if (!hasNextPage || !isLoading) return;
    fetchDataFunction(page, size).then((result: any) => {
      setHasNextPage(!result.isLast);
      setData((prevData: any) => [...prevData, ...result.content]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    });
  }, [isLoading]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, clientHeight, scrollHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moreFetch = () => {
    setIsLoading(true);
  };

  const reset = async () => {
    fetchDataFunction(0, size).then((result: any) => {
      setData(result.content);
      setHasNextPage(!result.isLast);
      setPage(1);
      setIsLoading(false);
      setTotal(0);
    });
  };
  return {
    data,
    isLoading,
    hasNextPage,
    containerRef,
    reset,
    moreFetch,
    total,
  };
}

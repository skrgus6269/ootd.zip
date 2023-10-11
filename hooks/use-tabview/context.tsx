import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';

type TabViewContextType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

const TabViewContext = createContext<TabViewContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const TabViewProvider = ({ children }: ProviderProps) => {
  const [index, setIndex] = useState<number>(1);
  const contextValue = useMemo(() => ({ index, setIndex }), [index, setIndex]);

  return (
    <TabViewContext.Provider value={contextValue}>
      {children}
    </TabViewContext.Provider>
  );
};

export const useTabViewContext = () => {
  const context = useContext(TabViewContext);
  if (context === undefined) {
    throw new Error('useTabViewContext must be used within a TabViewProvider');
  }
  return context;
};

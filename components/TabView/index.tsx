import TabBar from './TabBar';
import Tab from './Tab';
import Tabs from './Tabs';
import { TabViewProvider } from '@/hooks/use-tabview/context';

interface TabViewProps {
  children: React.ReactNode;
  initialIndex: number;
}

export default function TabView({ children, initialIndex }: TabViewProps) {
  return (
    <TabViewProvider initialIndex={initialIndex}>
      <>{children}</>
    </TabViewProvider>
  );
}

TabView.TabBar = TabBar;
TabView.Tab = Tab;
TabView.Tabs = Tabs;

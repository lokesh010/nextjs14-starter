'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const SidebarContext = createContext<{
  isSidebarCollapsed: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}>({
  isSidebarCollapsed: false,
  setSidebar: () => {},
});

export default function SidebarCollapsedContextProvider(props: any) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarCollapsed: collapsed,
        setSidebar: setCollapsed,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}

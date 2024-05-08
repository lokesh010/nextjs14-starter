import SidebarContextProvider from "./Sidebar";

export default function AppContextProvider(props: any) {
  return <SidebarContextProvider>{props.children}</SidebarContextProvider>;
}

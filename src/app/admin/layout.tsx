import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { ReactElement } from "react";
import Sidebar from "./_layouts/Sidebar";
import Topbar from "./_layouts/Topbar";
import SidebarCollapsedContextProvider from "@context/Sidebar";
// import SidebarCollapsedContextProvider from "@context/Sidebar";

function DashboardLayout({ children }: { children: ReactElement }) {
  return (
    <SidebarCollapsedContextProvider>
      <Layout className="h-screen">
        <Sidebar />
        <Content className="overflow-auto">
          <Topbar />
          <Content className="m-4 p-4 rounded-lg bg-white h-screen">
            {children}
          </Content>
        </Content>
      </Layout>
    </SidebarCollapsedContextProvider>
  );
}

export default DashboardLayout;

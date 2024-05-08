import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { ReactElement } from "react";
import Sidebar from "./_layouts/Sidebar";
import Topbar from "./_layouts/Topbar";
import SidebarCollapsedContextProvider from "@context/Sidebar";
import ErrorBoundary from "@components/ErrorBoundary";

function DashboardLayout({ children }: { children: ReactElement }) {
  return (
    <SidebarCollapsedContextProvider>
      <Layout className="h-screen">
        <Sidebar />
        <Content>
          <Topbar />
          <Content className="m-4 p-4 rounded-lg bg-white h-[calc(100%-100px)] overflow-auto">
            <ErrorBoundary>{children}</ErrorBoundary>
          </Content>
        </Content>
      </Layout>
    </SidebarCollapsedContextProvider>
  );
}

export default DashboardLayout;

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ReactElement } from 'react';
import Sidebar from './_layouts/Sidebar';
import Topbar from './_layouts/Topbar';
import SidebarCollapsedContextProvider from '@context/Sidebar';
import ErrorBoundary from '@components/ErrorBoundary';

function DashboardLayout({ children }: { children: ReactElement }) {
  return (
    <SidebarCollapsedContextProvider>
      <Layout className="h-screen">
        <Sidebar />
        <Content>
          <Topbar />
          <Content className="m-4 h-[calc(100%-100px)] overflow-auto rounded-lg bg-white p-4">
            <ErrorBoundary>{children}</ErrorBoundary>
          </Content>
        </Content>
      </Layout>
    </SidebarCollapsedContextProvider>
  );
}

export default DashboardLayout;

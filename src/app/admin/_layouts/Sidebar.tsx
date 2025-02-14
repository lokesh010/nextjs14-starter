'use client';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useContext } from 'react';
import menu from './menu';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { SidebarContext } from '@context/Sidebar';

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const { isSidebarCollapsed: collapsed } = useContext(SidebarContext);
  return (
    <Sider
      theme="light"
      className="h-full overflow-auto bg-white transition duration-500"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="flex items-center justify-center p-6">
        <Image
          priority
          src="/assets/logo.png"
          alt="logo"
          height={80}
          width={80}
        />
      </div>
      <Menu
        selectedKeys={[pathname]}
        onClick={({ key }) => router.push(key)}
        activeKey="1"
        mode="inline"
        items={menu}
      />
    </Sider>
  );
}

export default Sidebar;

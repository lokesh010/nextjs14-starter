"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SidebarContext } from "@context/Sidebar";
import { Avatar, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import React, { useContext } from "react";

const dropdownItems = [
  { path: "/", title: "Profile" },
  { path: "/login", title: "Logout" },
];

function Topbar() {
  const { isSidebarCollapsed: collapsed, setSidebar } =
    useContext(SidebarContext);

  return (
    <Header className="flex justify-between !bg-white transition duration-500 px-6">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger text-light-blue text-xl",
        onClick: () => setSidebar(!collapsed),
        style: {
          placeSelf: "center",
        },
      })}
      <Dropdown
        trigger={["click"]}
        menu={{
          items: dropdownItems.map((_) => ({
            key: _.title,
            label: <Link href={_.path}>{_.title}</Link>,
          })),
        }}
        placement="bottomRight"
      >
        <div className="cursor-pointer">
          <Avatar src="/assets/admin-icon.png" size={45} />
        </div>
      </Dropdown>
    </Header>
  );
}

export default Topbar;

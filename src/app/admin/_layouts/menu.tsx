import {
  EditOutlined,
  HomeOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';

const sidebarMenuItems: ItemType<MenuItemType>[] = [
  {
    key: '/admin/dashboard',
    icon: <HomeOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/admin/users',
    icon: <UserOutlined />,
    label: 'Users',
    children: [
      {
        key: '/admin/users/create',
        icon: <PlusOutlined />,
        label: 'Create',
      },
      {
        key: '/admin/users/update',
        icon: <EditOutlined />,
        label: 'Update',
      },
    ],
  },
];

export default sidebarMenuItems;
